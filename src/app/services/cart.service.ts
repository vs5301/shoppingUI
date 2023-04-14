import { Injectable } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Products } from '../products';
import { FormBuilder } from '@angular/forms';
import { collection, doc, Firestore, setDoc, Timestamp } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(
    public service: CartService,
    public fb: FormBuilder,
    private firestore: Firestore
    ) { }
}

