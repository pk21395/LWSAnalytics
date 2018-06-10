import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() { }

    getLocalStorageData()
    {
      let localstoragedata = JSON.parse(localStorage.getItem('user'));
      return localstoragedata;
    }
}
