import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { of } from 'rxjs';
//import { of } from 'rxjs/observable/of';

@Injectable()
export class UserService {
  public userName: BehaviorSubject<any>;
  public userlastName: BehaviorSubject<any>;

  constructor() {}

  get Getuser(): Observable<any> {
    return this.userName.asObservable();
  }


  logInService(userName) {
    localStorage.setItem("userName", JSON.stringify(userName));
    this.setUserName();
  }

  setUserName() {
    this.userName = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("userName"))
    );
    this.userlastName = new BehaviorSubject<any>(
      JSON.parse(localStorage.getItem("userLastName"))
    );

  }
}
