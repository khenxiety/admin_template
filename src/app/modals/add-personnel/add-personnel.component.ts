import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-personnel',
  templateUrl: './add-personnel.component.html',
  styleUrls: ['./add-personnel.component.scss'],
})
export class AddPersonnelComponent implements OnInit {
  select: any = 'Select';

  name: any;

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
  school_graduated2: any;

  school_graduated3: any;

  educational_attainment: any;
  civil_status: any;
  department: any;
  type: any;
  year_of_service: any;
  place_of_assignment: any;
  sub_type: any;
  year1: any;
  year2: any;
  year3: any;

  rank_list = [
    'Administrative Aide I',
    'Administrative Aide III',
    'Administrative Aide IV',
    'Administrative Aide VI',
    'Administrative Assistant II',
    'Aircon Technician I',
    'Aircon Technician II',
    'Architect I',
    'Buyer 1',
    'Carpenter II',
    'Carpenter/Fabricator'  ,
    'College Librarian I',

    'College Librarian III',
    'Computer Technician',
    'Dance  Trainor',
    'Dental Aide',
    'Electrical Engineer',
    'Electrician',
    'Engineer Assistant',
    'Guidance Facilitator',
    'Lab Technician I',
    'Mason',
    'Mason I',
    'Network Technician',
    'Nurse I',

    'Nurse II',
    'Painter',
    'Painter I',
    'Plumber',
    'Part Time Physician',
    'Psychometrician',
    'Registrar III',
    'Security Guard I',
    'Store Keeper',
    'Welder'


  ];

  constructor(
    private http: HttpClient,
    private toast: ToastrService,
    private mat: MatDialog,
    private firestore: Firestore,
    public dialogRef: MatDialogRef<AddPersonnelComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
    console.clear();

    this.sub_type = this.data.sub_type;
    this.type = this.data.type;
  }

  addEmployee() {
    const dbinstance = collection(this.firestore, 'jobpersonnel');
    let data = {
      name: this.name,
      email: this.email,
      FT_or_PT: this.ft_or_tp,
      age: this.age,
      sex: this.sex,
      baccalaureate: this.baccalaureate,
      ba_Spec: this.ba_spec,
      masters: this.masters,
      ma_spec: this.ma_spec,
      doctorate: this.doctorate,
      Ph_D_Spec: this.Ph_D_Spec,
      professional_licensure_earned: this.professional_licensure_earned,
      tenure_of_appointment: this.tenure_of_appointment,
      rank: this.rank,
      teaching_load: this.teaching_load,

      annual_Salary: this.annual_salary,
      place_of_origin: this.place_of_origin,
      date_of_birth: this.date_of_birth,
      date_of_original_Appointment: this.date_of_original_Appointment,
      school_graduated: this.school_graduated + `(${this.year1})`,
      school_graduated_2: this.school_graduated2 + `(${this.year2})`,
      school_graduated_3: this.school_graduated3 + `(${this.year3})`,
      place_of_assignment: this.place_of_assignment,

      educational_attainment: this.educational_attainment,
      civil_status: this.civil_status,
      years_of_service: this.year_of_service,
      type: this.type,
      department: this.department,
      sub_type: this.sub_type,
    };

    addDoc(dbinstance, data)
      .then((res: any) => {
        console.log(res);
        this.toast.success('Post Added');
        this.ngOnInit();
        this.mat.closeAll();
        location.reload();
      })
      .catch((err: any) => {
        console.log('error');
        this.toast.error('Error', 'All Fields are required');
      });

    // try {
    //   this.http
    //     .post('http://127.0.0.1:8000/api/insert_employee', data, {
    //       headers: headers,
    //     })
    //     .subscribe((res: any) => {

    //       if (res.status == true) {
    //         this.toast.success('Successfully Added', res.message);
    //         // matdialog close
    //         this.mat.closeAll();

    //       } else {
    //         this.toast.error('Error', res.message);
    //       }
    //     }, (err) => {

    //       if(err.status==400){
    //         this.toast.error('Error', "All Fields are required");

    //         }
    //       if(err.status==500){
    //       this.toast.error('Error', "Email already exist");

    //       }
    //     });
    // } catch (error) {

    // }
  }
  noteOpen(){
    console.log('test')
    const note =document.getElementById('note')!;
    note.classList.toggle('open')
  }
  noteClose(){
    const note =document.getElementById('note')!;
    note.classList.toggle('open')
  }
}
