import { Component, OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-men-accessories',
  templateUrl: './men-accessories.component.html',
  styleUrls: ['./men-accessories.component.css']
})
export class MenAccessoriesComponent implements OnInit{

  menAccessoriesList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){  }

  ngOnInit(): void {
    this.getData()
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
  }

  getData(){
    if(this.dbService.menAccessoriesSubject.value.length === 0) this.dbService.getMenAccessories()
    let menAccessoriesSub = this.dbService.menAccessoriesSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menAccessoriesList = [...value]
        this.dbService.getWindowRef().setTimeout(() => menAccessoriesSub.unsubscribe, this.dbService.timeoutInterval * 6)
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
