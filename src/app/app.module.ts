import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './pages/dashboard/dashboard.component';
import { AccountsComponent } from './pages/accounts/accounts.component';
import { RecordsComponent } from './pages/records/records.component';

import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav'; 
import {MatIconModule} from '@angular/material/icon';
// material button\
import {MatButtonModule} from '@angular/material/button';

import {MatToolbarModule} from '@angular/material/toolbar';

import {MatFormFieldModule, MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { DataTable1Component } from './data-tables/data-table1/data-table1.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { DataTable2Component } from './data-tables/data-table2/data-table2.component';
import { JobPersonnelComponent } from './pages/job-personnel/job-personnel.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { JwtModule, JwtModuleOptions } from '@auth0/angular-jwt';
import { JobPersonnelPersonalComponent } from './pages/job-personnel-personal/job-personnel-personal.component';
import { JobPersonnelEducationComponent } from './pages/job-personnel-education/job-personnel-education.component';
import { FacultyPersonalComponent } from './pages/faculty-personal/faculty-personal.component';
import { FacultyEducationComponent } from './pages/faculty-education/faculty-education.component';


import { MatDialogModule } from '@angular/material/dialog';
import { AddEmployeeComponent } from './modals/add-employee/add-employee.component';
import { FacultyPersonalInfoComponent } from './data-tables/faculty-personal-info/faculty-personal-info.component';
import { FacultyDegreeTableComponent } from './data-tables/faculty-degree-table/faculty-degree-table.component';
import { PersonnelPersonalTableComponent } from './data-tables/personnel-personal-table/personnel-personal-table.component';
import { PersonnelDegreeTableComponent } from './data-tables/personnel-degree-table/personnel-degree-table.component';
import { FilterModalComponent } from './modals/filter-modal/filter-modal.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UpdateEmployeeComponent } from './modals/update-employee/update-employee.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { getAuth,provideAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { AddPersonnelComponent } from './modals/add-personnel/add-personnel.component';
import { DeleteJobpersonnelComponent } from './modals/delete-jobpersonnel/delete-jobpersonnel.component';
import { DeleteFacultyComponent } from './modals/delete-faculty/delete-faculty.component';
import { FacultyTemporaryAlldataComponent } from './data-tables/faculty-temporary-alldata/faculty-temporary-alldata.component';
import { FacultyTemporaryPersonalComponent } from './data-tables/faculty-temporary-personal/faculty-temporary-personal.component';
import { FacultyTemporaryDegreeComponent } from './data-tables/faculty-temporary-degree/faculty-temporary-degree.component';
import { FacultyGuestAlldataComponent } from './data-tables/faculty-guest-alldata/faculty-guest-alldata.component';
import { FacultyGuestPersonalComponent } from './data-tables/faculty-guest-personal/faculty-guest-personal.component';
import { FacultyGuestDegreeComponent } from './data-tables/faculty-guest-degree/faculty-guest-degree.component';
import { JobpersonnelTemporaryAlldataComponent } from './data-tables/jobpersonnel-temporary-alldata/jobpersonnel-temporary-alldata.component';
import { JobpersonnelTemporaryPersonalComponent } from './data-tables/jobpersonnel-temporary-personal/jobpersonnel-temporary-personal.component';
import { JobpersonnelTemporaryDegreeComponent } from './data-tables/jobpersonnel-temporary-degree/jobpersonnel-temporary-degree.component';
import { JobpersonnelOrdersAlldataComponent } from './data-tables/jobpersonnel-orders-alldata/jobpersonnel-orders-alldata.component';
import { JobpersonnelOrdersPersonalComponent } from './data-tables/jobpersonnel-orders-personal/jobpersonnel-orders-personal.component';
import { JobpersonnelOrdersDegreeComponent } from './data-tables/jobpersonnel-orders-degree/jobpersonnel-orders-degree.component';
import { ViewFacultyComponent } from './modals/view-faculty/view-faculty.component';
import { AddFacultyComponent } from './pages/add-faculty/add-faculty.component';
import { ViewJobpersonnelComponent } from './pages/view-jobpersonnel/view-jobpersonnel.component';
import { ViewGuestLecturerComponent } from './pages/view-guest-lecturer/view-guest-lecturer.component';
import { FacultyGuestNewlyAlldataComponent } from './data-tables/faculty-guest-newly-alldata/faculty-guest-newly-alldata.component';
import { FacultyGuestNewlyPersonalComponent } from './data-tables/faculty-guest-newly-personal/faculty-guest-newly-personal.component';
import { FacultyGuestNewlyDegreeComponent } from './data-tables/faculty-guest-newly-degree/faculty-guest-newly-degree.component';
import { FacultyGuestInvitedAlldataComponent } from './data-tables/faculty-guest-invited-alldata/faculty-guest-invited-alldata.component';
import { FacultyGuestInvitedDegreeComponent } from './data-tables/faculty-guest-invited-degree/faculty-guest-invited-degree.component';
import { FacultyGuestInvitedPersonalComponent } from './data-tables/faculty-guest-invited-personal/faculty-guest-invited-personal.component';
import { DeleteGuestsComponent } from './modals/delete-guests/delete-guests.component';
import { UpdateJobpersonnelComponent } from './modals/update-jobpersonnel/update-jobpersonnel.component';

import { UpdateGuestComponent } from './modals/update-guest/update-guest.component';



export function tokenGetter() {
  return localStorage.getItem("token");
}



@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    AccountsComponent,
    RecordsComponent,
    LoginComponent,
    DataTable1Component,
    DataTable2Component,
    JobPersonnelComponent,
    JobPersonnelPersonalComponent,
    JobPersonnelEducationComponent,
    FacultyPersonalComponent,
    FacultyEducationComponent,
    AddEmployeeComponent,
    FacultyPersonalInfoComponent,
    FacultyDegreeTableComponent,
    PersonnelPersonalTableComponent,
    PersonnelDegreeTableComponent,
    FilterModalComponent,
    SettingsComponent,
    UpdateEmployeeComponent,
    AddPersonnelComponent,
    DeleteJobpersonnelComponent,
    DeleteFacultyComponent,
    FacultyTemporaryAlldataComponent,
    FacultyTemporaryPersonalComponent,
    FacultyTemporaryDegreeComponent,
    FacultyGuestAlldataComponent,
    FacultyGuestPersonalComponent,
    FacultyGuestDegreeComponent,
    JobpersonnelTemporaryAlldataComponent,
    JobpersonnelTemporaryPersonalComponent,
    JobpersonnelTemporaryDegreeComponent,
    JobpersonnelOrdersAlldataComponent,
    JobpersonnelOrdersPersonalComponent,
    JobpersonnelOrdersDegreeComponent,
    ViewFacultyComponent,
    AddFacultyComponent,
    ViewJobpersonnelComponent,
    ViewGuestLecturerComponent,
    FacultyGuestNewlyAlldataComponent,
    FacultyGuestNewlyPersonalComponent,
    FacultyGuestNewlyDegreeComponent,
    FacultyGuestInvitedAlldataComponent,
    FacultyGuestInvitedDegreeComponent,
    FacultyGuestInvitedPersonalComponent,
    DeleteGuestsComponent,
    UpdateJobpersonnelComponent,
   
    UpdateGuestComponent,
   
   
  ],
  imports: [
    BrowserModule,
    MatSliderModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    CommonModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config:{
        tokenGetter: tokenGetter
        
      }
    }),
    MatDialogModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase())
    


  ],
  providers: [
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'fill'}}
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
