import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {collection,addDoc,Firestore, getDocs, deleteDoc, doc, updateDoc} from '@angular/fire/firestore'

@Component({
  selector: 'app-delete-faculty',
  templateUrl: './delete-faculty.component.html',
  styleUrls: ['./delete-faculty.component.scss']
})
export class DeleteFacultyComponent implements OnInit {

  id:any;

  constructor(private http: HttpClient,private firestore:Firestore, private toast: ToastrService,private mat:MatDialog,public dialogRef: MatDialogRef<DeleteFacultyComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data.data)
    this.id=this.data.data.id
  }


 
  deleteEmployee() {
   

    const deleteDocs=doc(this.firestore,'employees',this.id)
      deleteDoc(deleteDocs).then((res:any)=>{
       
        this.toast.success('Post Deleted')
        this.dialogRef.close()
  
      }).catch((err:any)=>{
        console.log(err.message)
      })
    
  }
}
