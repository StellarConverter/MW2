import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TitlepageComponent } from './titlepage/titlepage.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportpageComponent } from './reportpage/reportpage.component';

import {routes } from './app.router';

@NgModule({
  declarations: [
    AppComponent,
    TitlepageComponent,
    DashboardComponent,
    ReportpageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
