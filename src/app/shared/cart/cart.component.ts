import { Component, OnInit } from '@angular/core';
import { NgbOffcanvas, NgbOffcanvasConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit{

  public products: any = []
  public grandTotal!: number
  public totalAmount: any

  constructor(config: NgbOffcanvasConfig, private offcanvasService: NgbOffcanvas){
    config.position = 'end';
		config.backdropClass = 'bg-info';
		config.keyboard = false;
  }

  ngOnInit(): void {
      
  }

  open(content: any) {
		this.offcanvasService.open(content);
	}
}
