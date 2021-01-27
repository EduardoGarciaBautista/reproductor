import {Injectable} from '@angular/core';
import {AngularFirestore, DocumentReference} from '@angular/fire/firestore';
import {RegisterModel} from '@models/register.model';
import {COLLECTION_NAME} from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private fireStore: AngularFirestore) {
  }

  saveRegister(register: RegisterModel): Promise<DocumentReference<unknown>> {
    return this.fireStore.collection(COLLECTION_NAME).add(register);
  }
}
