import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { 
  collection, CollectionReference, doc, DocumentData, Firestore, getDoc, limit,
  onSnapshot,
  orderBy, Query, query, QueryDocumentSnapshot, startAfter, where } from '@angular/fire/firestore'
import { BehaviorSubject } from 'rxjs';
import * as CONSTANTS from '../constants'

@Injectable({
  providedIn: 'root'
})
export class DbService {

  //Men-Indian Page Data
  homeMenIndianSubject = new BehaviorSubject<any[]>([])
  menIndianSubject = new BehaviorSubject<any[]>([])
  menIndianLastDoc = new BehaviorSubject<QueryDocumentSnapshot<DocumentData> | null>(null);

   //Men-Accessories Page Data
  menAccessoriesSubject = new BehaviorSubject<any[]>([])
  homeMenAccessoriesSubject = new BehaviorSubject<any[]>([])
  menFootwearLastDoc = new BehaviorSubject<QueryDocumentSnapshot<DocumentData> | null>(null);


   //Men-Footwear Page Data
  menFootwearSubject = new BehaviorSubject<any[]>([])
  homeMenFootwearSubject = new BehaviorSubject<any[]>([])
  menAccessoriesLastDoc = new BehaviorSubject<QueryDocumentSnapshot<DocumentData> | null>(null);


   //Topwear Page Data
  topwearSubject = new BehaviorSubject<any[]>([])
  homeTopwearSubject = new BehaviorSubject<any[]>([])
  topwearLastDoc = new BehaviorSubject<QueryDocumentSnapshot<DocumentData> | null>(null);

   //Bottomwear Page Data
  bottomwearSubject = new BehaviorSubject<any[]>([])
  homeBottomwearSubject = new BehaviorSubject<any[]>([])
  bottomwearLastDoc = new BehaviorSubject<QueryDocumentSnapshot<DocumentData> | null>(null);

  //Women-Indian Page Data
  womenIndianSubject = new BehaviorSubject<any[]>([])
  homeWomenIndianSubject = new BehaviorSubject<any[]>([])

  //Women-Accessories Page Data
  womenAccessoriesSubject = new BehaviorSubject<any[]>([])
  homeWomenAccessoriesSubject = new BehaviorSubject<any[]>([])

  //Women-Footwear Page Data
  womenFootwearSubject = new BehaviorSubject<any[]>([])
  homeWomenFootwearSubject = new BehaviorSubject<any[]>([])

  //Westernwear Page Data
  westernWearSubject = new BehaviorSubject<any[]>([])

  //Living Page Data
  livingSubject = new BehaviorSubject<any[]>([])

  //Cart Page Data
  cartSubject = new BehaviorSubject<any[]>([])

  $HOME_DOC_LIMIT: number = 3;
  $DOC_LIMIT: number = 6;

    // Load More Bools for various sections
    isItemsAvailable: boolean = true;
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private firestore: Firestore,
  ) {
    this.getMenIndian()
    this.getMenAccessories()
    this.getMenFootwear()
    this.getWomenIndian()
    this.getWomenAccessories()
    this.getWomenFootwear()
  }

  public onLoad(){
    this.getBottomwear()
    this.getTopwear()
    this.getWesternwear()
    this.getWesternwear()
  }


  getWindowRef = (): Window => this.doc.defaultView as Window;
  getCollectionRef = (collectionName: string): CollectionReference<DocumentData> => collection(this.firestore, collectionName);
  getQueryRef(collectionName: string, whereKey: string, orderByKey: string, isDescOrder: boolean = false): Query<DocumentData> {
    let queryRef: Query = query(
      this.getCollectionRef(collectionName),
      where(whereKey, '==', true),
      orderBy(orderByKey, isDescOrder ? 'desc' : 'asc')
    );
    return queryRef;
  }

  public get timeoutInterval() {
    return 10000;
  }


  

  async getMenIndian() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.MEN_INDIAN_COLLECTION), (snapshot) => {
      this.menIndianSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  async getMenAccessories() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.MEN_ACCESSORIES_COLLECTION), (snapshot) => {
      this.menAccessoriesSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  async getMenFootwear() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.MEN_FOOTWEAR_COLLECTION), (snapshot) => {
      this.menFootwearSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  async getTopwear() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.TOPWEAR_COLLECTION), (snapshot) => {
      this.topwearSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    });
  }

  async getBottomwear() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.BOTTOMWEAR_COLLECTION), (snapshot) => {
      this.bottomwearSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    });
  }

  async getWomenAccessories() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.WOMEN_ACCESSORIES_COLLECTION), (snapshot) => {
      this.womenAccessoriesSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  async getWomenIndian() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.WOMEN_INDIAN_COLLECTION), (snapshot) => {
      this.womenIndianSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  async getWomenFootwear() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.WOMEN_FOOTWEAR_COLLECTION), (snapshot) => {
      this.womenFootwearSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  async getWesternwear() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.WESTERNWEAR_COLLECTION), (snapshot) => {
      this.westernWearSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    });
  }

  async getLiving() {
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.LIVING_COLLECTION), (snapshot) => {
      this.livingSubject.next(snapshot.docs.map(e => {
        return e.data()
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    });
  }

  async getCartItems(){
    const unsub = onSnapshot(this.getCollectionRef(CONSTANTS.CART_COLLECTION), (snapshot) => {
      this.cartSubject.next(snapshot.docs.map(e => {
        return e.data()
      }))
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6)
    })
  }
  
}