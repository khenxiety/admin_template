import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
// import { DataTable2DataSource, DataTable2Item } from './data-table2-datasource';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { AddEmployeeComponent } from 'src/app/modals/add-employee/add-employee.component';
import { FilterModalComponent } from 'src/app/modals/filter-modal/filter-modal.component';
import { UpdateEmployeeComponent } from 'src/app/modals/update-employee/update-employee.component';
import * as XLSX from 'xlsx';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { AddPersonnelComponent } from 'src/app/modals/add-personnel/add-personnel.component';
import { DeleteJobpersonnelComponent } from 'src/app/modals/delete-jobpersonnel/delete-jobpersonnel.component';
import { Router } from '@angular/router';
import { UpdateJobpersonnelComponent } from 'src/app/modals/update-jobpersonnel/update-jobpersonnel.component';

export interface DataTable2Item {
  name: string;
  id: number;
  email: any;
  ft_or_tp: any;
  age: any;
  sex: any;
  baccalaureate: any;
  ba_spec: any;
  masters: any;
  ma_spec: any;
  doctorate: any;
  Ph_D_Spec: any;
  professional_licensure_earned: any;
  tenure_of_appointment: any;
  rank: any;
  teaching_load: any;
  subjects_Taught: any;
  annual_salary: any;
  place_of_origin: any;
  date_of_birth: any;
  date_of_original_Appointment: any;
  school_graduated: any;
  educational_attainment: any;
  civil_status: any;
  sub_type:any;
}

@Component({
  selector: 'app-data-table2',
  templateUrl: './data-table2.component.html',
  styleUrls: ['./data-table2.component.scss'],
})
export class DataTable2Component implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTable2Item>;
  dataSource: MatTableDataSource<DataTable2Item>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = [
    'id',
    'name',
    'ft_or_tp',
    
    'sex',
    'baccalaureate',
    'ba_spec',
    'masters',
    'ma_spec',
    'doctorate',
    'Ph_D_Spec',
    'professional_licensure_earned',
    'tenure_of_appointment',
    
    'rank',
    'teaching_load',
    'subjects_Taught',
    'annual_salary',
    'actions',
  ];

  fileName: any = 'Job Personnel List Form A (Permanent Non Teaching).xlsx';

  search: any;

  non_teaching: any;

  name: any;
  id: any;
  email: any;
  ft_or_tp: any;
  age: any;
  sex: any;
  baccalaureate: any;
  ba_spec: any;
  masters: any;
  ma_spec: any;
  doctorate: any;
  Ph_D_Spec: any;
  professional_licensure_earned: any;
  tenure_of_appointment: any;
  rank: any;
  teaching_load: any;
  subjects_Taught: any;
  annual_salary: any;
  place_of_origin: any;
  date_of_birth: any;
  date_of_original_Appointment: any;
  school_graduated: any;
  educational_attainment: any;
  civil_status: any;


  length:any;

  non_teaching_sorted:any

  constructor(
    private http: HttpClient,
    private toast: ToastrService,
    private modal: MatDialog,
    private firestore: Firestore,
    private router:Router
  ) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
   
    const dbinstance = collection(this.firestore, 'jobpersonnel');
    getDocs(dbinstance)
      .then((res: any) => {
      

        this.non_teaching = [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
        this.non_teaching = this.non_teaching.filter(
          (item: { sub_type: string }) => item.sub_type == 'permanent'
        );
        this.length = this.non_teaching.length;
        this.non_teaching_sorted=this.non_teaching.sort((a:any, b:any) => a['name'] > b['name'] ? 1 : a['name'] === b['name'] ? 0 : -1);

        this.dataSource.data = this.non_teaching_sorted as DataTable2Item[];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }
  exportexcel(): void {
    let element = document.getElementById('personnel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    XLSX.writeFile(wb, this.fileName);
    location.reload();

  }

  searchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openModal() {
    let modal = this.modal.open(AddPersonnelComponent, {
      width: '90vw',
      data:{
        type:'non teaching-staff',
        sub_type:'permanent'
      }
    }).afterClosed().subscribe(res => {
      if (res) {
        
        this.ngAfterViewInit();
      }
    })
  }

  deleteEmployee(id: any) {
   

    const deleteDocs=doc(this.firestore,'jobpersonnel',id)
      deleteDoc(deleteDocs).then((res:any)=>{
       
        this.toast.success('Post Deleted')
        this.ngAfterViewInit();
  
      }).catch((err:any)=>{
        console.log(err.message)
      })
    
  }

  filterDept(res: any) {
    this.non_teaching = this.non_teaching.filter(
      (item: { department: string }) => item.department == res
    );

    this.dataSource.data = this.non_teaching as DataTable2Item[];
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.toast.success('Department Filtered to', res);
  }
  openFilterModal() {
    let modal = this.modal
      .open(FilterModalComponent, {
        width: '350px',
      })
      .afterClosed()
      .subscribe((res) => {
        if (res == 'All' || res == undefined) {
          this.ngAfterViewInit();
        } else {
          this.filterDept(res);
        }
      });
  }

  openModalUpdate(data: any) {
    const dialogRef = this.modal
      .open(UpdateJobpersonnelComponent, {
        width: '90vw',
        hasBackdrop: true,
        data: {
          data: data,
        },
      })
      .afterClosed()
      .subscribe((res) => {
        this.ngAfterViewInit();
    
      });
  }
  openDeleteModal(data: any) {
    const dialogRef = this.modal
      .open(DeleteJobpersonnelComponent, {
        
        hasBackdrop: true,
        data: {
          data: data,
        },
      })
      .afterClosed()
      .subscribe((res) => {
        this.ngAfterViewInit();
      });
      
  }

  viewProfile(id:any){
    this.router.navigate(['/admin/job-personnel/profile/'+id])

  }
  
}
