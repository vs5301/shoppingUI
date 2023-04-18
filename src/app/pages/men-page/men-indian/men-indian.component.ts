import { Component,OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-men-indian',
  templateUrl: './men-indian.component.html',
  styleUrls: ['./men-indian.component.css']
})
export class MenIndianComponent implements OnInit{

  menIndianList: any[] = []

  constructor(
    private dbService: DbService
  ){  }
  
  ngOnInit(): void {
    this.getInitialData()
  }

  getInitialData(){
    let menIndianSub = this.dbService.homeMenIndianSubject.subscribe((value) => {
      if(value.length !== 0){
        this.menIndianList = [...value]
        this.getRemainingData()
        this.dbService.getWindowRef().setTimeout(() => menIndianSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }

  getRemainingData(){
    this.dbService.getAllMenIndian()
    let menIndianSub = this.dbService.menIndianSubject.subscribe((value) =>{
      if(value.length !== 0){
        this.menIndianList = this.menIndianList.concat(value)
        this.dbService.getWindowRef().setTimeout(() => menIndianSub.unsubscribe(), this.dbService.timeoutInterval * 6)
      }
    })
  }
}
