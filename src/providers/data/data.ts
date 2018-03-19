import { Storage } from '@ionic/storage';
import { Injectable } from '@angular/core';


@Injectable()
export class DataProvider {
  

  constructor(public storage: Storage) {
    console.log('Hello DataProvider Provider');
  }

  getResult(key){
    return this.storage.get(key)
  }

  saveResult(key, data){
    return this.storage.set(key, data)
  }

  clearResultData(key){
    return this.storage.remove('')
  }

  deleteData(){
    // return this.storage.clear()
  }

}
