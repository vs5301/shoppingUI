import { Component,OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-topwear',
  templateUrl: './topwear.component.html',
  styleUrls: ['./topwear.component.css']
})
export class TopwearComponent implements OnInit{

  topwearList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.topwearSubject.value.length === 0) this.dbService.getTopwear()
    let topwearSub = this.dbService.topwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.topwearList = [...value]
        this.dbService.getWindowRef().setTimeout(() => topwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
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
