import { Component, OnInit } from '@angular/core';

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

  constructor() { 
 
  this.obj=localStorage.getItem('data')
  this.data=JSON.parse(this.obj)


  this.name=this.data.name
  this.email=this.data.email
    
  
    



  }

  ngOnInit(): void {
  }

}
