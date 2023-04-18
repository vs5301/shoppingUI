import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

 cartList: any[] = []

  constructor(
    private dbService: DbService
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
  
}
