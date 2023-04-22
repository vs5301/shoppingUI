import { Component,OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-men-indian',
  templateUrl: './men-indian.component.html',
  styleUrls: ['./men-indian.component.css']
})
export class MenIndianComponent implements OnInit{

  menIndianList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){  }
  
  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)    
  }

  getData(){
    if(this.dbService.menIndianSubject.value.length === 0) this.dbService.getMenIndian()
    let menIndianSub = this.dbService.menIndianSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menIndianList = [...value]
        this.dbService.getWindowRef().setTimeout(() => menIndianSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }

  addToCart(values: any){
    let docRef = doc(this.collectionRef);
    setDoc(docRef, { ...values }, { merge: true })
    .then(() => {
      console.log("Success")
    }, (error) => {
      console.log(error)
    })
  }
}
