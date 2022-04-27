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
  selector: 'app-view-jobpersonnel',
  templateUrl: './view-jobpersonnel.component.html',
  styleUrls: ['./view-jobpersonnel.component.scss']
})
export class ViewJobpersonnelComponent implements OnInit {

  data:any
  id:any;
  constructor(private activated:ActivatedRoute,private firestore: Firestore,) { 
    
    
    this.id=this.activated.snapshot.paramMap.get('id');
    console.log(this.id)
   


  }

  ngOnInit(): void {
    const dbinstance = collection(this.firestore, 'jobpersonnel');
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
