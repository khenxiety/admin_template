import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import {collection,addDoc,Firestore, getDocs, deleteDoc, doc, updateDoc} from '@angular/fire/firestore'

@Component({
  selector: 'app-delete-guests',
  templateUrl: './delete-guests.component.html',
  styleUrls: ['./delete-guests.component.scss']
})
export class DeleteGuestsComponent implements OnInit {

  id:any;

   constructor(private http: HttpClient,private firestore:Firestore, private toast: ToastrService,private mat:MatDialog,public dialogRef: MatDialogRef<DeleteGuestsComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit(): void {
    console.log(this.data.data)
    this.id=this.data.data.id
    console.log(this.id)
  }
 deleteEmployee() {
   

    const deleteDocs=doc(this.firestore,'guest',this.id)
      deleteDoc(deleteDocs).then((res:any)=>{
        console.log(res)
       
        this.toast.success('Post Deleted')
        this.dialogRef.close()
  
      }).catch((err:any)=>{
        console.log(err.message)
      })
    
  }
}
