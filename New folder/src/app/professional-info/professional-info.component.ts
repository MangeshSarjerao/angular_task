import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-professional-info",
  templateUrl: "./professional-info.component.html",
  styleUrls: ["./professional-info.component.css"],
})
export class ProfessionalInfoComponent implements OnInit {
  exp: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  updateExperience() {
    // this.router.navigate(["dashboard"]);
  }
}
