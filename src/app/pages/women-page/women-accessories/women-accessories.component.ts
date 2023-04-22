import { Component, OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-women-accessories',
  templateUrl: './women-accessories.component.html',
  styleUrls: ['./women-accessories.component.css']
})
export class WomenAccessoriesComponent implements OnInit{

  womenAccessoriesList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.womenAccessoriesSubject.value.length === 0) this.dbService.getWomenAccessories()
    let womenAccessoriesSub = this.dbService.womenAccessoriesSubject.subscribe((value) => {
      if(value.length !== 0){
        this.womenAccessoriesList = [...value]
        this.dbService.getWindowRef().setTimeout(() => womenAccessoriesSub.unsubscribe, this.dbService.timeoutInterval * 6)
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
