import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormControl, Validators, FormGroup } from "@angular/forms";
import { UserService } from "../shared/service/EmployeeService";
import { ActivatedRoute, Routes, Router } from "@angular/router";
import { Subscription } from "rxjs";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit, OnDestroy {
  data: any;
  userName;
  userLastName;
  errormsg = false;
  subscription: Subscription;
  logIn: boolean = true;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    // this.userName = this.route.snapshot.data['uname'];
    // alert(this.userService.userValue());
    // this.data = this.route.snapshot.data["uname"];
    // if (this.data == "") {
    //   this.errormsg = true;
    //   setTimeout(() => {
    //     this.errormsg = false;
    //   }, 2000);
    //   this.router.navigate(["login"]);
    // }
    // this.subscription = this.userService.userName.subscribe((uname) => {
    //   this.userName = uname;
    // });
    // this.subscription = this.userService.userlastName.subscribe((lname) => {
    //   if (lname == null) {
    //     this.userLastName = "";
    //   } else {
    //     this.userLastName = lname;
    //   }
    // });
  }
  ngOnInit() {
    if (localStorage.getItem("userName")) {
      this.logIn = false;
    }
  }

  resetLocalstorage() {
    localStorage.clear();
  }

  ngOnDestroy() {
    // this.subscription.unsubscribe();
  }
}
