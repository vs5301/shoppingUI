import { Component,OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-westernwear',
  templateUrl: './westernwear.component.html',
  styleUrls: ['./westernwear.component.css']
})
export class WesternwearComponent implements OnInit{

  westernwearList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.westernWearSubject.value.length === 0) this.dbService.getWesternwear()
    let westernwearSub = this.dbService.topwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.westernwearList = [...value]
        this.dbService.getWindowRef().setTimeout(() => westernwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
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
