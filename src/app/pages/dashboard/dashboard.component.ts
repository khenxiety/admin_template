import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {collection,addDoc,Firestore, getDocs, deleteDoc, doc, updateDoc} from '@angular/fire/firestore'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {


  faculty:any;
  jobPersonnel:any

  facultyTotal:any;
  jobPersonnelTotal:any;
  guest:any;

  constructor(private http :HttpClient, private firestore:Firestore) { }

  ngOnInit(): void {

    const token = localStorage.getItem('token');

    // const headers = new HttpHeaders({
    //   'Authorization': 'Bearer ' + token, 
    // })

    // this.http.get('http://127.0.0.1:8000/api/admin/show',{headers:headers}).subscribe((res:any)=>{
      
    //   this.faculty=res.data;

      



    
      
    // })

    const dbinstance=collection(this.firestore,'employees');
    getDocs(
      dbinstance,
    ).then((res:any)=>{
      // console.log(res.docs.map((doc:any)=>{
      //   return {...doc.data(),id:doc.id}
      // }))
      this.faculty=[...res.docs.map((doc:any)=>{
        return {...doc.data(),id:doc.id}
      })]



        this.facultyTotal=this.faculty.length;
   
    }).catch((err:any)=>{
      console.log(err.message)
    })
    this.getJobpersonnels()


    this.getGuests()
    



  }


  getJobpersonnels(){
    const dbinstance=collection(this.firestore,'jobpersonnel');
    getDocs(
      dbinstance,
    ).then((res:any)=>{
      // console.log(res.docs.map((doc:any)=>{
      //   return {...doc.data(),id:doc.id}
      // }))
      this.jobPersonnel=[...res.docs.map((doc:any)=>{
        return {...doc.data(),id:doc.id}
      })]



      
        this.jobPersonnelTotal=this.jobPersonnel.length;
    }).catch((err:any)=>{
      console.log(err.message)
    })
    
  }


  getGuests(){
    const dbinstance=collection(this.firestore,'guest');
    getDocs(
      dbinstance,
    ).then((res:any)=>{
   
      this.guest=[...res.docs.map((doc:any)=>{
        return {...doc.data(),id:doc.id}
      })]



      
        this.facultyTotal=this.facultyTotal+this.guest.length;
    }).catch((err:any)=>{
      console.log(err.message)
    })
    

  }

  getTotal(){
    return this.facultyTotal+this.jobPersonnelTotal
  }

}
