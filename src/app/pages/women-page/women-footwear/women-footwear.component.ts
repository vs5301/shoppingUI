import { Component,OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-women-footwear',
  templateUrl: './women-footwear.component.html',
  styleUrls: ['./women-footwear.component.css']
})
export class WomenFootwearComponent implements OnInit{

  womenFootwearList: any[] = []

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getInitialData()
  }

  getInitialData(){
    let womenFootwearSub = this.dbService.homeWomenFootwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.womenFootwearList = [...value]
        this.getRemainingData()
        this.dbService.getWindowRef().setTimeout(() => womenFootwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }

  getRemainingData(){
    this.dbService.getAllWomenFootwear()
    let womenFootwearSub = this.dbService.womenFootwearSubject.subscribe((value) =>{
      if(value.length !== 0){
        this.womenFootwearList = this.womenFootwearList.concat(value)
        this.dbService.getWindowRef().setTimeout(() => womenFootwearSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }
}
