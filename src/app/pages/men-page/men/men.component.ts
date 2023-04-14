import { Component, OnInit } from '@angular/core';
import { collection, doc, Firestore, setDoc, Timestamp } from '@angular/fire/firestore';

@Component({
  selector: 'app-men',
  templateUrl: './men.component.html',
  styleUrls: ['./men.component.css']
})
export class MenComponent implements OnInit{

  constructor(){}

  ngOnInit(): void {
      
  }

  async addToCart(){
    let values = {}
  }

}
