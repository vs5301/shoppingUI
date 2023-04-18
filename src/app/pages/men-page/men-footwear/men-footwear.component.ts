import { Component,OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-men-footwear',
  templateUrl: './men-footwear.component.html',
  styleUrls: ['./men-footwear.component.css']
})
export class MenFootwearComponent implements OnInit{

  menFootwearList: any[] = []

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getInitialData()
  }

  getInitialData(){
    let menFootwearSub = this.dbService.homeMenAccessoriesSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menFootwearList = [...value]
        this.getRemainingData()
        this.dbService.getWindowRef().setTimeout(() => menFootwearSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }

  getRemainingData(){
    this.dbService.getAllMenFootwear()
    let menFootwearSub = this.dbService.menFootwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menFootwearList = this.menFootwearList.concat(value)
        this.dbService.getWindowRef().setTimeout(() => menFootwearSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }
}
