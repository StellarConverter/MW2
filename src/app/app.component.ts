import { Component } from '@angular/core';
import {Router} from '@angular/router';

import { TitlepageComponent} from './titlepage/titlepage.component';
import { ReportpageComponent } from './reportpage/reportpage.component';
import {DashboardComponent} from './dashboard/dashboard.component';

import { StuffRoot } from './classes/stuffRoot';
import { BaxterService } from './baxter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [BaxterService]
})
export class AppComponent 
{
  title = 'app works!';
  zzz:StuffRoot;

  constructor(private qq:BaxterService, private router:Router) { }

  ngOnInit()
  {
    this.zzz = this.qq.getStuff();
  }
  
  nextClick()
  {
    this.zzz.ExecuteNext();
    let card = this.zzz.CurrentCard();
    if (card == null)
    {
       let link = ['dash'];
       this.router.navigate(link);
    }
    else
    {
       let link = ['rep'];
       this.router.navigate(link);
    }
  }
}
