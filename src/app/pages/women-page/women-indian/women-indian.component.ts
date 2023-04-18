import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-women-indian',
  templateUrl: './women-indian.component.html',
  styleUrls: ['./women-indian.component.css']
})
export class WomenIndianComponent implements OnInit{

  womenIndianList: any[] = []

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getInitialData()
  }

  getInitialData(){
    let womenIndianSub = this.dbService.homeWomenIndianSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.womenIndianList = [...value];
        this.getRemainingData();
        this.dbService.getWindowRef().setTimeout(() => womenIndianSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }

  getRemainingData(){
    this.dbService.getAllWomenIndian();
    let womenIndianSub = this.dbService.womenIndianSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.womenIndianList = this.womenIndianList.concat(value);
        this.dbService.getWindowRef().setTimeout(() => womenIndianSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }
}
