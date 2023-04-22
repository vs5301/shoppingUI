import { Component,OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-bottomwear',
  templateUrl: './bottomwear.component.html',
  styleUrls: ['./bottomwear.component.css']
})
export class BottomwearComponent implements OnInit{

  bottomwearList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.bottomwearSubject.value.length === 0) this.dbService.getBottomwear()
    let bottomwearSub = this.dbService.bottomwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.bottomwearList = [...value]
        this.dbService.getWindowRef().setTimeout(() => bottomwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
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
