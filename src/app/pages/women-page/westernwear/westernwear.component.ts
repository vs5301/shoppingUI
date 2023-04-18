import { Component,OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-westernwear',
  templateUrl: './westernwear.component.html',
  styleUrls: ['./westernwear.component.css']
})
export class WesternwearComponent implements OnInit{

  westernwearList: any[] = []

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    if(this.dbService.westernWearSubject.value.length === 0) this.dbService.getWesternwear()
    let westernwearSub = this.dbService.topwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.westernwearList = [...value]
        this.dbService.getWindowRef().setTimeout(() => westernwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }
}
