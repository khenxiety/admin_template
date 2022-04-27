import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {Auth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from '@angular/fire/auth'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:any;
  password:any;
  constructor(private router:Router,private http:HttpClient, private toast:ToastrService, private auth:Auth) { }

  ngOnInit(): void {
  }

  
  showSuccess(){
    this.toast.success('You are logged in successfully', 'Success!');
  }
  showError(msg:any){
    this.toast.error(msg, 'Error!');
  }


  login(){
    signInWithEmailAndPassword(this.auth,this.username,this.password).then((res:any)=>{
      
      localStorage.setItem('token',res.user.accessToken)



      this.toast.success('Login Successful')
      this.router.navigate(['/admin']);

    })
    .catch((err:any)=>{
      console.log(err)
      this.toast.error('Login Failed',err.message)

    })


    // try {
    //   this.http.post('http://127.0.0.1:8000/api/login',{
    //   email:this.username,
    //   password:this.password

    // }).subscribe((res:any)=>{
      
    //   if(res.status=="success"){
    //     console.log(res)
    //     localStorage.setItem('token',res.token);
    //     localStorage.setItem('name',res.name);

    //     localStorage.setItem('data',JSON.stringify(res));




    //     this.router.navigate(['/admin']);
    //     this.showSuccess();
    //     this.username='';
    //     this.password='';
    //   }


    // },error=>{
     
      
    //   this.showError(error.error.message);


    //   this.username='';
    //   this.password='';

    // })
      
    // } catch (error) {
    //   this.toast.error('Invalid Credentials', "error");
      
    // }

    
      
    
    

    
     
    
  }
  signIn(){
    createUserWithEmailAndPassword(this.auth,'administrator@gmail.com',"admin1234").then((res:any)=>{
      console.log(res.user)
    })
    .catch((err:any)=>{
      console.log(err.message)

    })

  }
}
