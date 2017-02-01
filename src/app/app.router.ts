import { ModuleWithProviders } from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { TitlepageComponent} from './titlepage/titlepage.component';
import { ReportpageComponent } from './reportpage/reportpage.component';
import {DashboardComponent} from './dashboard/dashboard.component';


export const router : Routes = [
    { path: '', redirectTo: 'title', pathMatch: 'full' },
    {path:'title', component: TitlepageComponent },
    {path: 'dash', component: DashboardComponent},
    {path: 'rep', component: ReportpageComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);