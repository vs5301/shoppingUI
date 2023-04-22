import { Component, OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-women-indian',
  templateUrl: './women-indian.component.html',
  styleUrls: ['./women-indian.component.css']
})
export class WomenIndianComponent implements OnInit{

  womenIndianList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.womenIndianSubject.value.length === 0) this.dbService.getWomenIndian()
    let womenIndianSub = this.dbService.womenIndianSubject.subscribe((value) => {
      if(value.length !== 0){
        this.womenIndianList = [...value]
        this.dbService.getWindowRef().setTimeout(() => womenIndianSub.unsubscribe, this.dbService.timeoutInterval * 6)
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
