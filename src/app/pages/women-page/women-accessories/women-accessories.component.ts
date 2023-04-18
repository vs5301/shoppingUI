import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-women-accessories',
  templateUrl: './women-accessories.component.html',
  styleUrls: ['./women-accessories.component.css']
})
export class WomenAccessoriesComponent implements OnInit{

  womenAccessoriesList: any[] = []

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getInitialData()
  }

  getInitialData() {
    let womenAccessoriesSub = this.dbService.homeWomenAccessoriesSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.womenAccessoriesList = [...value];
        this.getRemainingData();
        this.dbService.getWindowRef().setTimeout(() => womenAccessoriesSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }

  getRemainingData() {
    this.dbService.getAllWomenAccessories();
    let womenAccessoriesSub = this.dbService.womenAccessoriesSubject.subscribe((value) => {
      if(value.length !== 0) {
        this.womenAccessoriesList = this.womenAccessoriesList.concat(value);
        this.dbService.getWindowRef().setTimeout(() => womenAccessoriesSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }
}
