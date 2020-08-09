import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LogInComponent } from './log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import appRoutes from './app-routing';
import { CommonModule } from '@angular/common';
import { UserService } from './shared/service/EmployeeService';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { ProfessionalInfoComponent } from './professional-info/professional-info.component';
import { ServiceResolver } from './shared/service/ResolveServices';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    LogInComponent,
    PersonalInfoComponent,
    ProfessionalInfoComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
  ],
  providers: [UserService, ServiceResolver],
  bootstrap: [AppComponent],
})
export class AppModule {}
