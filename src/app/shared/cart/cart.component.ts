import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  public products: any = []
  public grandTotal!: number
  public totalAmount: any

  constructor(private cart: CartService){}

  ngOnInit(): void {
      
  }
}
