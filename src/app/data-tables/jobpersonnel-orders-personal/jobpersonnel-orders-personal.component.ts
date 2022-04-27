import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';
import { ToastrService } from 'ngx-toastr';
import { FilterModalComponent } from 'src/app/modals/filter-modal/filter-modal.component';
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

export interface DataTable2Item {
  name: string;
  id: number;
  email:any;
  
  age:any;
  sex:any;
  baccalaureate:any;
  ba_spec:any;
  masters:any;
  ma_spec:any;
  doctorate:any;
  Ph_D_Spec:any;
  professional_licensure_earned:any;
  tenure_of_appointment:any;
  rank:any;
  teaching_load:any;
  subjects_Taught:any
  annual_salary:any;
  place_of_origin:any;
  date_of_birth:any;
  date_of_original_Appointment:any;
  school_graduated:any;
  educational_attainment:any;
  civil_status:any  
  place_of_assignment:any,
  sub_type:any;
}
@Component({
  selector: 'app-jobpersonnel-orders-personal',
  templateUrl: './jobpersonnel-orders-personal.component.html',
  styleUrls: ['./jobpersonnel-orders-personal.component.scss']
})
export class JobpersonnelOrdersPersonalComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<DataTable2Item>;
  dataSource: MatTableDataSource<DataTable2Item>;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name','age','sex','civil_status','educational_attainment','school_graduated',    'place_of_assignment','rank','date_of_original_Appointment','tenure_of_appointment','place_of_origin','date_of_birth'];


  data:any;
  search:any;
  length:any;
  constructor(private http:HttpClient,private toast:ToastrService, private modal:MatDialog, private firestore:Firestore) {
    this.dataSource = new MatTableDataSource();
  }

  ngAfterViewInit(): void {
    const token = localStorage.getItem('token');

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer ' + token, 
    // })

    // this.http.get('http://127.0.0.1:8000/api/admin/show',{headers:headers}).subscribe((res:any)=>{
    //   console.log(res);
    //   this.data=res.data;
    //   // filter data
    //   this.data=this.data.filter((item: { type: string; })=>item.type=="non teaching-staff");
    //   console.log(this.data);





    //   this.dataSource.data=this.data as DataTable2Item[];
    //   this.dataSource.sort = this.sort;
    //   this.dataSource.paginator = this.paginator;
    //   this.table.dataSource = this.dataSource;
    // })

    const dbinstance = collection(this.firestore, 'jobpersonnel');
    getDocs(dbinstance)
      .then((res: any) => {
        // console.log(res.docs.map((doc:any)=>{
        //   return {...doc.data(),id:doc.id}
        // }))

        this.data = [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
        this.data = this.data.filter(
          (item: { sub_type: string }) => item.sub_type == 'job orders'
        );
        this.length = this.data.length;
        this.dataSource.data = this.data as DataTable2Item[];
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        this.table.dataSource = this.dataSource;
      })
      .catch((err: any) => {
        console.log(err.message);
      });
  }


  exportexcel(): void 
    {
       /* table id is passed over here */   
       let element = document.getElementById('personnel-info'); 
       const ws: XLSX.WorkSheet =XLSX.utils.table_to_sheet(element);

       /* generate workbook and add the worksheet */
       const wb: XLSX.WorkBook = XLSX.utils.book_new();
       XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
      // remove column
      

       /* save to file */
       XLSX.writeFile(wb, 'Job Personnel List Form B (Job Orders).xlsx');
    location.reload();

			
    }
  searchFilter(event:Event){
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

  }
  filterDept(res:any){
    this.data = this.data.filter(
      (item: { department: string }) => item.department == res
    );

    this.dataSource.data = this.data as DataTable2Item[];
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
    this.toast.success('Department Filtered to', res);

  }
  openFilterModal(){
    let modal=this.modal.open(FilterModalComponent,{
      width:'350px',

    }).afterClosed().subscribe(res=>{
      

      if(res=='All' || res==undefined){
        this.ngAfterViewInit();

      }else{
        this.filterDept(res);
      }

     
      
      

    })
  }
}