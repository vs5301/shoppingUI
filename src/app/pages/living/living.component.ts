import { Component,OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';

@Component({
  selector: 'app-living',
  templateUrl: './living.component.html',
  styleUrls: ['./living.component.css']
})
export class LivingComponent implements OnInit{

  livingList: any[] = []

  constructor(
    private dbService: DbService
  ){}

  ngOnInit(): void {
    this.getData()
  }

  getData(){
    if(this.dbService.livingSubject.value.length === 0) this.dbService.getLiving()
    let livingSub = this.dbService.livingSubject.subscribe((value) => {
      if(value.length !== 0){
        this.livingList = [...value]
        this.dbService.getWindowRef().setTimeout(() => livingSub.unsubscribe, this.dbService.timeoutInterval * 6)
      }
    })
  }
}
