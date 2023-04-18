import { Component,OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-topwear',
  templateUrl: './topwear.component.html',
  styleUrls: ['./topwear.component.css']
})
export class TopwearComponent implements OnInit{

  topwearList: any[] = []

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    if(this.dbService.topwearSubject.value.length === 0) this.dbService.getTopwear()
    let topwearSub = this.dbService.topwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.topwearList = [...value]
        this.dbService.getWindowRef().setTimeout(() => topwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }
}
