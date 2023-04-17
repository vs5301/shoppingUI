import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { 
  collection, CollectionReference, doc, DocumentData, Firestore, getDoc, limit,
  orderBy, Query, query, QueryDocumentSnapshot, startAfter, where } from '@angular/fire/firestore'
import { BehaviorSubject } from 'rxjs';
import * as CONSTANTS from '../constants'

@Injectable({
  providedIn: 'root'
})
export class DbService {

  constructor() { }
}
