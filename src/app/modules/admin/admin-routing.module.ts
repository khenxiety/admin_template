import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewGuestLecturerComponent } from 'src/app/pages/view-guest-lecturer/view-guest-lecturer.component';
import { AccountsComponent } from 'src/app/pages/accounts/accounts.component';
import { AddFacultyComponent } from 'src/app/pages/add-faculty/add-faculty.component';
import { AdminDashboardComponent } from 'src/app/pages/dashboard/dashboard.component';
import { FacultyEducationComponent } from 'src/app/pages/faculty-education/faculty-education.component';
import { FacultyPersonalComponent } from 'src/app/pages/faculty-personal/faculty-personal.component';
import { JobPersonnelEducationComponent } from 'src/app/pages/job-personnel-education/job-personnel-education.component';
import { JobPersonnelPersonalComponent } from 'src/app/pages/job-personnel-personal/job-personnel-personal.component';
import { JobPersonnelComponent } from 'src/app/pages/job-personnel/job-personnel.component';
import { RecordsComponent } from 'src/app/pages/records/records.component';
import { SettingsComponent } from 'src/app/pages/settings/settings.component';
import { ViewJobpersonnelComponent } from 'src/app/pages/view-jobpersonnel/view-jobpersonnel.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin-dash',
        component: AdminDashboardComponent,
      },
      {
        path: 'faculty-list/all-info',
        component: AccountsComponent,
      },{
        path: 'faculty-list/personal-info',
        component:FacultyPersonalComponent
      },
      {
        path: 'faculty-list/higher-education',
        component:FacultyEducationComponent
      },{
        path:'faculty/profile/:id',
        component:AddFacultyComponent
      },
      {
        path:'guest-lecturer/profile/:id',
        component:ViewGuestLecturerComponent
      },
      {
        path: 'job-personnel-list/all-info',
        component: JobPersonnelComponent,
      },{
        path:'job-personnel-list/personal-info',
        component:JobPersonnelPersonalComponent

      },
      {
        path:'job-personnel-list/higher-education',
        component:JobPersonnelEducationComponent

      },
      {
        path:'job-personnel/profile/:id',
        component:ViewJobpersonnelComponent

      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
      {
        path: '',
        redirectTo: '/admin/admin-dash',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
