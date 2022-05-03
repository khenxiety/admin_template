import { Component, OnInit } from '@angular/core';
import {Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth'
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {


  name:any
  email:any

  data:any

  obj:any

  new_name:any
  new_email:any
  new_password:any
  c_new_password:any



  constructor(private router:Router,private toast:ToastrService, private auth:Auth) { 
 
  this.obj=localStorage.getItem('data')
  this.data=JSON.parse(this.obj)


  // this.name=this.data.name
  this.email=this.data.email
    
  
    



  }

  ngOnInit(): void {
  }




  addAccount(){
    createUserWithEmailAndPassword(this.auth,this.new_email,this.c_new_password).then((res:any)=>{
      
    



      this.toast.success('Account Successfully Created')
     

    })
    .catch((err:any)=>{
      console.log(err)
      this.toast.error('Creating Account failed',err.message)

    })

  }
}
