import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from "@angular/router";
import { UserService } from "./EmployeeService";
import { Observable } from "rxjs";

@Injectable()
export class ServiceResolver implements Resolve<any> {
  fname;
  constructor(private userService: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | any {
    this.userService.Getuser.subscribe((data) => (this.fname = data));
    return this.fname;
  }
}
