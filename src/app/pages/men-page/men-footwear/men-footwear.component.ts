import { Component,OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-men-footwear',
  templateUrl: './men-footwear.component.html',
  styleUrls: ['./men-footwear.component.css']
})
export class MenFootwearComponent implements OnInit{

  menFootwearList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(){
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
    this.getData()
  }

  getData(){
    if(this.dbService.menFootwearSubject.value.length === 0) this.dbService.getMenFootwear()
    let menFootwearSub = this.dbService.menFootwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menFootwearList = [...value]
        this.dbService.getWindowRef().setTimeout(() => menFootwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
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
