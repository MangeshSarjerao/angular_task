import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from "@angular/forms";
import { Router } from "@angular/router";
import { UserService } from "../shared/service/EmployeeService";
@Component({
  selector: "app-log-in",
  templateUrl: "./log-in.component.html",
  styleUrls: ["./log-in.component.css"],
})
export class LogInComponent implements OnInit {
  logInForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService
  ) {
    this.logInForm = new FormGroup({
      EmailAddress: new FormControl(""),
      Password: new FormControl(""),
    });
  }

  public logInUser(logindetails) {
    this.userService.logInService(logindetails.EmailAddress);
    localStorage.setItem("userName", JSON.stringify(logindetails.EmailAddress));
    this.router.navigate(["dashboard"]);
    // localStorage.setitem('login');
    // this.router.navigate(['dashboard']);
  }

  get f() {
    return this.logInForm.controls;
  }

  ngOnInit() {
    this.logInForm = this.formBuilder.group({
      EmailAddress: ["", [Validators.required]],
      Password: ["", [Validators.required]],
    });
  }
}
