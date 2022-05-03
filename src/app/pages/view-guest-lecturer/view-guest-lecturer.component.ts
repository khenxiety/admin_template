import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  collection,
  addDoc,
  Firestore,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from '@angular/fire/firestore';




@Component({
  selector: 'app-view-guest-lecturer',
  templateUrl: './view-guest-lecturer.component.html',
  styleUrls: ['./view-guest-lecturer.component.scss']
})
export class ViewGuestLecturerComponent implements OnInit {

  data:any
  id:any;
  constructor(private activated:ActivatedRoute,private firestore: Firestore,) { 
    
    
    this.id=this.activated.snapshot.paramMap.get('id');
    console.log(this.id)
   


  }

  ngOnInit(): void {
    const dbinstance = collection(this.firestore, 'guest');
    getDocs(dbinstance)
      .then((res: any) => {
        
        this.data = [
          ...res.docs.map((doc: any) => {
            return { ...doc.data(), id: doc.id };
          }),
        ];
        this.data = this.data.filter(
          (item: { id: string }) => item.id == this.id
        );
        console.log(this.data)
        
       
      })
      .catch((err: any) => {
        console.log(err.message);
      });


      }
}
