import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from 'src/app/pages/accounts/accounts.component';
import { RecordsComponent } from 'src/app/pages/records/records.component';
import { DashboardComponent } from './dashboard/dashboard.component';




const routes: Routes = [
    {
        path: '',
        component: DashboardComponent, children:[
            {
                path:'accounts',
                component: AccountsComponent
        },
        {
            path:'records',
            component: RecordsComponent
        },
        {
            path:'',
            redirectTo: '/admin/accounts',
            pathMatch: 'full'
        }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
