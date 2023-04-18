import { Component, OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-men-accessories',
  templateUrl: './men-accessories.component.html',
  styleUrls: ['./men-accessories.component.css']
})
export class MenAccessoriesComponent implements OnInit{

  menAccessoriesList: any[] = []

  constructor(
    private dbService: DbService
  ){  }

  ngOnInit(): void {
    this.getInitialData()
  }

  getInitialData(){
    let menAccessoriesSub = this.dbService.homeMenAccessoriesSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menAccessoriesList = [...value]
        this.getRemainingData()
        this.dbService.getWindowRef().setTimeout(() => menAccessoriesSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }

  getRemainingData(){
    this.dbService.getAllMenAccessories()
    let menAccessoriesSub = this.dbService.menAccessoriesSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menAccessoriesList = this.menAccessoriesList.concat(value)
        this.dbService.getWindowRef().setTimeout(() => menAccessoriesSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }
}
