import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { deleteDoc, doc,collection, Firestore } from '@angular/fire/firestore';
import { CART_COLLECTION } from 'src/app/constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

 cartList: any[] = []

  constructor(
    private dbService: DbService,
    private firestore: Firestore
  ){ }

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    if(this.dbService.cartSubject.value.length === 0) this.dbService.getCartItems()
  let cartSub = this.dbService.cartSubject.subscribe((value) => {
      if(value.length !== 0){
        this.cartList = [...value]
        this.dbService.getWindowRef().setTimeout(() => cartSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }
  
  deleteItem(docId: any) {
    const docInstance = doc(this.firestore,CART_COLLECTION,docId)
    deleteDoc(docInstance)
      .then(() => {
        console.log("Success")
      }, (error: any) => {
        console.error(">>> error: ", error);
          console.log(error)
      });
  }
  
}
