import { Component,OnInit } from '@angular/core';
import { DbService } from 'src/app/services/db.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  menIndianList: any[] = []
  menAccessoriesList: any[] = []
  menFootwearList: any[] = []

  womenIndianList: any[] = []
  womenAccessoriesList: any[] = []
  womenFootwearList: any[] = []

  constructor(
    public ngbCarousel: NgbCarouselModule,
    public dbService: DbService
  ){}

  ngOnInit(): void {
      this.getDataFromDbService()
  }

  getDataFromDbService(){
    let homeMenIndianSub = this.dbService.homeMenIndianSubject.subscribe((value) => {
      if(value!== null){
        this.menIndianList = value
        this.dbService.getWindowRef().setTimeout(() => homeMenIndianSub.unsubscribe(), this.dbService.timeoutInterval * 60)
      }
    })

    let homeMenAccessoriesSub = this.dbService.homeMenAccessoriesSubject.subscribe((value) => {
      if(value!== null){
        this.menAccessoriesList = value
        this.dbService.getWindowRef().setTimeout(() => homeMenAccessoriesSub.unsubscribe(), this.dbService.timeoutInterval * 60)
      }
    })

    let homeMenFootwearSub = this.dbService.homeMenFootwearSubject.subscribe((value) => {
      if(value!== null){
        this.menFootwearList = value
        this.dbService.getWindowRef().setTimeout(() => homeMenFootwearSub.unsubscribe(), this.dbService.timeoutInterval * 60)
      }
    })

    let homeWomenIndianSub = this.dbService.homeWomenIndianSubject.subscribe((value) => {
      if(value!== null){
        this.womenIndianList = value
        this.dbService.getWindowRef().setTimeout(() => homeWomenIndianSub.unsubscribe(), this.dbService.timeoutInterval * 60)
      }
    })

    let homeWomenAccessoriesSub = this.dbService.homeWomenAccessoriesSubject.subscribe((value) => {
      if(value!== null){
        this.womenAccessoriesList = value
        this.dbService.getWindowRef().setTimeout(() => homeWomenAccessoriesSub.unsubscribe(), this.dbService.timeoutInterval * 60)
      }
    })

    let homeWomenFootwearSub = this.dbService.homeWomenFootwearSubject.subscribe((value) => {
      if(value!== null){
        this.womenFootwearList = value
        this.dbService.getWindowRef().setTimeout(() => homeWomenFootwearSub.unsubscribe(), this.dbService.timeoutInterval * 60)
      }
    })
  }
}