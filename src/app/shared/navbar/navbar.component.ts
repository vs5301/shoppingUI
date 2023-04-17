import { Component, OnInit, TemplateRef } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{

  isMenuCollapsed: boolean = true
  closeResult: string = ""

  constructor(
    private router: Router,
    private offCanvas: NgbOffcanvas
  ){
    this.router.events.pipe(filter(x => x instanceof NavigationEnd))
    .subscribe((value) => {
      this.isMenuCollapsed = true
    })
  }

  ngOnInit(): void {
      
  }

  openEnd(content: TemplateRef<any>) {
		this.offCanvas.open(content, { position: 'end' });
	}
  
}