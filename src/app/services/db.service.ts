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



  $HOME_DOC_LIMIT: number = 6;
  $DOC_LIMIT: number = 50;

    // Load More Bools for various sections
    isItemsAvailable: boolean = true;
  constructor(
    @Inject(DOCUMENT) private doc: Document,
    private firestore: Firestore,
  ) { }

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


  getHomeMenIndian() {
    let queryRef = query(
      this.getQueryRef(CONSTANTS.MEN_INDIAN_COLLECTION, 'menIndianStatus', 'addedOn', true),
      limit(this.$HOME_DOC_LIMIT)
    );
  
    const unsub = onSnapshot(queryRef, (snapshot) => {
      this.isItemsAvailable = snapshot.size === this.$HOME_DOC_LIMIT
      this.homeMenIndianSubject.next(snapshot.docs.map((ele) => {
        this.menIndianLastDoc.next(ele);
        return ele.data();
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  getAllMenIndian() {
    let lastDoc = this.menIndianLastDoc.value;
    let queryRef = query(
      this.getQueryRef(CONSTANTS.MEN_INDIAN_COLLECTION, 'menIndianStatus', 'addedOn', true),
      startAfter(lastDoc)
    );
  }

  getHomeMenAccessories() {
    let queryRef = query(
      this.getQueryRef(CONSTANTS.MEN_ACCESSORIES_COLLECTION, 'menAccessoriesStatus', 'addedOn', true),
      limit(this.$HOME_DOC_LIMIT)
    );
  
    const unsub = onSnapshot(queryRef, (snapshot) => {
      this.isItemsAvailable = snapshot.size === this.$HOME_DOC_LIMIT
      this.homeMenIndianSubject.next(snapshot.docs.map((ele) => {
        this.menIndianLastDoc.next(ele);
        return ele.data();
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  getAllMenAccessories() {
    let lastDoc = this.menIndianLastDoc.value;
    let queryRef = query(
      this.getQueryRef(CONSTANTS.MEN_ACCESSORIES_COLLECTION, 'menAccessoriesStatus', 'addedOn', true),
      startAfter(lastDoc)
    );
  }

  getHomeMenFootwear() {
    let queryRef = query(
      this.getQueryRef(CONSTANTS.MEN_FOOTWEAR_COLLECTION, 'menFootwearStatus', 'addedOn', true),
      limit(this.$HOME_DOC_LIMIT)
    );
  
    const unsub = onSnapshot(queryRef, (snapshot) => {
      this.isItemsAvailable = snapshot.size === this.$HOME_DOC_LIMIT
      this.homeMenIndianSubject.next(snapshot.docs.map((ele) => {
        this.menIndianLastDoc.next(ele);
        return ele.data();
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  getAllMenFootwear() {
    let lastDoc = this.menIndianLastDoc.value;
    let queryRef = query(
      this.getQueryRef(CONSTANTS.MEN_FOOTWEAR_COLLECTION, 'menFootwearStatus', 'addedOn', true),
      startAfter(lastDoc)
    );
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


  getHomeWomenAccessories() {
    let queryRef = query(
      this.getQueryRef(CONSTANTS.WOMEN_ACCESSORIES_COLLECTION, 'womenAccessoriesStatus', 'addedOn', true),
      limit(this.$HOME_DOC_LIMIT)
    );
  
    const unsub = onSnapshot(queryRef, (snapshot) => {
      this.isItemsAvailable = snapshot.size === this.$HOME_DOC_LIMIT
      this.homeMenIndianSubject.next(snapshot.docs.map((ele) => {
        this.menIndianLastDoc.next(ele);
        return ele.data();
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  getAllWomenAccessories() {
    let lastDoc = this.menIndianLastDoc.value;
    let queryRef = query(
      this.getQueryRef(CONSTANTS.WOMEN_ACCESSORIES_COLLECTION, 'womenAccessoriesStatus', 'addedOn', true),
      startAfter(lastDoc)
    );
  }

  getHomeWomenIndian() {
    let queryRef = query(
      this.getQueryRef(CONSTANTS.WOMEN_INDIAN_COLLECTION, 'womenIndianStatus', 'addedOn', true),
      limit(this.$HOME_DOC_LIMIT)
    );
  
    const unsub = onSnapshot(queryRef, (snapshot) => {
      this.isItemsAvailable = snapshot.size === this.$HOME_DOC_LIMIT
      this.homeMenIndianSubject.next(snapshot.docs.map((ele) => {
        this.menIndianLastDoc.next(ele);
        return ele.data();
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  getAllWomenIndian() {
    let lastDoc = this.menIndianLastDoc.value;
    let queryRef = query(
      this.getQueryRef(CONSTANTS.WOMEN_INDIAN_COLLECTION, 'womenIndianStatus', 'addedOn', true),
      startAfter(lastDoc)
    );
  }

  getHomeWomenFootwear() {
    let queryRef = query(
      this.getQueryRef(CONSTANTS.WOMEN_ACCESSORIES_COLLECTION, 'womenFootwearStatus', 'addedOn', true),
      limit(this.$HOME_DOC_LIMIT)
    );
  
    const unsub = onSnapshot(queryRef, (snapshot) => {
      this.isItemsAvailable = snapshot.size === this.$HOME_DOC_LIMIT
      this.homeMenIndianSubject.next(snapshot.docs.map((ele) => {
        this.menIndianLastDoc.next(ele);
        return ele.data();
      }));
      this.getWindowRef().setTimeout(() => unsub(), this.timeoutInterval * 6);
    })
  }

  getAllWomenFootwear() {
    let lastDoc = this.menIndianLastDoc.value;
    let queryRef = query(
      this.getQueryRef(CONSTANTS.WOMEN_ACCESSORIES_COLLECTION, 'womenFootwearStatus', 'addedOn', true),
      startAfter(lastDoc)
    );
  }

  getHomeWesternwear() {
    let queryRef = query(
      this.getQueryRef(CONSTANTS.WESTERNWEAR_COLLECTION, 'menIndianStatus', 'addedOn', true),
      limit(this.$HOME_DOC_LIMIT)
    );
  
    const unsub = onSnapshot(queryRef, (snapshot) => {
      this.isItemsAvailable = snapshot.size === this.$HOME_DOC_LIMIT
      this.homeMenIndianSubject.next(snapshot.docs.map((ele) => {
        this.menIndianLastDoc.next(ele);
        return ele.data();
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
  
}