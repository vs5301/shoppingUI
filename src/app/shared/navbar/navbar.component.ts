import { Component, OnInit, TemplateRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  cartList: any[] = []

  isMenuCollapsed: boolean = true
  closeResult: string = ""

  constructor(
    private router: Router,
    private offCanvas: NgbOffcanvas,
    private dbService: DbService
  ){
    this.router.events.pipe(filter(x => x instanceof NavigationEnd))
    .subscribe((value) => {
      this.isMenuCollapsed = true
    })
  }

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

  openEnd(content: TemplateRef<any>) {
		this.offCanvas.open(content, { position: 'end' });
	}
  
}