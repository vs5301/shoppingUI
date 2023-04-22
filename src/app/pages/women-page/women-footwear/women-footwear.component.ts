import { Component,OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-women-footwear',
  templateUrl: './women-footwear.component.html',
  styleUrls: ['./women-footwear.component.css']
})
export class WomenFootwearComponent implements OnInit{

  womenFootwearList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.womenFootwearSubject.value.length === 0) this.dbService.getWomenFootwear()
    let womenFootwearSub = this.dbService.womenFootwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.womenFootwearList = [...value]
        this.dbService.getWindowRef().setTimeout(() => womenFootwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
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
