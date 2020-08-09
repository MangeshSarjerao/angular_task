import { Component, OnInit, OnDestroy } from "@angular/core";
import { UserService } from "../shared/service/EmployeeService";
import { Subscription } from "rxjs";

@Component({
  selector: "app-personal-info",
  templateUrl: "./personal-info.component.html",
  styleUrls: ["./personal-info.component.css"],
})
export class PersonalInfoComponent implements OnInit, OnDestroy {
  public uname;
  public lname;
  subscription: Subscription;

  constructor(private userService: UserService) {
    // this.subscription =this.userService.userName.subscribe((uname) => {
    //   this.uname = uname;
    // });
    // this.subscription =this.userService.userlastName.subscribe((lastname) => {
    //   this.lname = lastname;
    // });
  }
  updateUser() {
    // this.userService.userName.next(this.uname);
    // this.userService.userlastName.next(this.lname);
    // localStorage.clear();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
    // localStorage.removeItem('userName');
  }

  ngOnInit() {}
}
