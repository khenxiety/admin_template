import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {collection,addDoc,Firestore, getDocs, deleteDoc, doc, updateDoc} from '@angular/fire/firestore'

@Component({
  selector: 'app-update-jobpersonnel',
  templateUrl: './update-jobpersonnel.component.html',
  styleUrls: ['./update-jobpersonnel.component.scss']
})
export class UpdateJobpersonnelComponent implements OnInit {

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
  year1: any='';
  year2: any='';
  year3: any='';

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

  id:any
   constructor(private http: HttpClient,private firestore:Firestore, private toast: ToastrService,private mat:MatDialog,public dialogRef: MatDialogRef<UpdateJobpersonnelComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    // console.log(this.data.data)
    this.id=this.data.data.id
    this.name=this.data.data.name
    this.email=this.data.data.email
    this.ft_or_tp=this.data.data.FT_or_PT
    this.age=this.data.data.age

    this.sex=this.data.data.sex
    this.baccalaureate=this.data.data.baccalaureate
    this.ba_spec=this.data.data.ba_Spec
    this.masters=this.data.data.masters
    this.ma_spec=this.data.data.ma_spec
    this.doctorate=this.data.data.doctorate
    this.Ph_D_Spec=this.data.data.Ph_D_Spec
    this.professional_licensure_earned=this.data.data.professional_licensure_earned
    this.tenure_of_appointment=this.data.data.tenure_of_appointment
    this.rank=this.data.data.rank
    this.teaching_load=this.data.data.teaching_load
    this.place_of_assignment=this.data.data.place_of_assignment
    this.annual_salary=this.data.data.annual_Salary
    this.place_of_origin=this.data.data.place_of_origin
    this.date_of_birth=this.data.data.date_of_birth 
    this.date_of_original_Appointment=this.data.data.date_of_original_Appointment
    this.school_graduated=this.data.data.school_graduated
    this.school_graduated2=this.data.data.school_graduated_2
    this.school_graduated3=this.data.data.school_graduated_3
    this.educational_attainment=this.data.data.educational_attainment
    this.civil_status=this.data.data.civil_status
    this.department=this.data.data.department
    this.type=this.data.data.type
    this.year_of_service=this.data.data.years_of_service
    this.sub_type=this.data.data.sub_type

  }



  updateEmployee() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });
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
      doctorate:this.doctorate,
      Ph_D_Spec: this.Ph_D_Spec,
      professional_licensure_earned: this.professional_licensure_earned,
      tenure_of_appointment: this.tenure_of_appointment,
      rank: this.rank,
      teaching_load: this.teaching_load,
      
      annual_Salary: this.annual_salary,
      place_of_origin: this.place_of_origin,
      date_of_birth:  this.date_of_birth,
      date_of_original_Appointment: this.date_of_original_Appointment,
      school_graduated: this.school_graduated+`(${this.year1})`,
      school_graduated_2: this.school_graduated2+`(${this.year2})`,
      school_graduated_3: this.school_graduated3+`(${this.year3})`,
      place_of_assignment: this.place_of_assignment,

      educational_attainment:this.educational_attainment,
      civil_status: this.civil_status,
      years_of_service: this.year_of_service,
      type: this.type,
      department: this.department,
    };

  const updatedoc=doc(this.firestore,'jobpersonnel',this.id)
    updateDoc(updatedoc,data).then((res:any)=>{
     
      this.toast.success('Post Updated')
     
      this.mat.closeAll();
      location.reload()

      

    }).catch((err:any)=>{
      console.log(err.message)
      this.toast.error('All feilds are required', "Error")

    })

    // try {
    //   this.http
    //   .put('http://127.0.0.1:8000/api/user/update/' + this.id,data, {
    //     headers: headers,
    //   })
    //   .subscribe((res: any) => {

    //     console.log(res);
    //     this.mat.closeAll();

        
    //     this.toast.success('Successfully Updated', res.message);
       
    //   });
  
      
    // } catch (error) {
    //   console.log(error);
    
      
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
