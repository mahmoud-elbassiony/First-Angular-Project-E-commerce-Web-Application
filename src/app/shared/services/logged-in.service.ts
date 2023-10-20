import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoggedInService {
  loggedIn: BehaviorSubject<boolean>;
  constructor() {
    if (localStorage.getItem('auth-token')) {
      this.loggedIn = new BehaviorSubject(true);
    } else {
      this.loggedIn = new BehaviorSubject(false);
    }
  }
  getLoggIn() {
    return this.loggedIn.asObservable();
  }
  setLoggedIn(state: boolean) {
    this.loggedIn.next(state);
    if (state) {
      localStorage.setItem('auth-token', 'token');
    } else {
      localStorage.removeItem('auth-token');
    }
  }
}
