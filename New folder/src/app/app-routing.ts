import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { LogInComponent } from "./log-in/log-in.component";
import { PersonalInfoComponent } from "./personal-info/personal-info.component";
import { ProfessionalInfoComponent } from "./professional-info/professional-info.component";
import { ServiceResolver } from "./shared/service/ResolveServices";

const appRoutes: Routes = [
  { path: "", redirectTo: "/dashboard/personal-info", pathMatch: "full" },
  {
    path: "login",
    component: LogInComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: PersonalInfoComponent,
      },
      {
        path: "personal-info",
        component: PersonalInfoComponent,
      },
      {
        path: "professional-info",
        component: ProfessionalInfoComponent,
      },
    ],
  },
];
export default appRoutes;
