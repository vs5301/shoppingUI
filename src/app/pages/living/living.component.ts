import { Component,OnInit } from '@angular/core';
import { CollectionReference, DocumentData, doc, setDoc } from 'firebase/firestore';
import { CART_COLLECTION } from 'src/app/constants';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.css']
})
export class LivingComponent implements OnInit{

  livingList: any[] = []
  collectionRef!: CollectionReference<DocumentData>

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.collectionRef = this.dbService.getCollectionRef(CART_COLLECTION)
    this.getData()
  }

  getData(){
    if(this.dbService.livingSubject.value.length === 0) this.dbService.getLiving()
    let livingSub = this.dbService.livingSubject.subscribe((value) => {
      if(value.length !== 0){
        this.livingList = [...value]
        this.dbService.getWindowRef().setTimeout(() => livingSub.unsubscribe, this.dbService.timeoutInterval * 6)
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
