import { Component,OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-bottomwear',
  templateUrl: './bottomwear.component.html',
  styleUrls: ['./bottomwear.component.css']
})
export class BottomwearComponent implements OnInit{

  bottomwearList: any[] = []

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    if(this.dbService.bottomwearSubject.value.length === 0) this.dbService.getBottomwear()
    let bottomwearSub = this.dbService.topwearSubject.subscribe((value) => {
      if(value.length !== 0){
        this.bottomwearList = [...value]
        this.dbService.getWindowRef().setTimeout(() => bottomwearSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }
}
