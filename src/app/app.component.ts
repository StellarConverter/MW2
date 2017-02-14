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
  zzz:StuffRoot;

  constructor(private qq:BaxterService, private router:Router) { }

  ngOnInit()
  {
    this.zzz = this.qq.getStuff();
  }
  
  nextClick()
  {
    this.zzz.ExecuteNext();
    if (this.zzz.CurrentCard == null)
    {
       this.nav("dash");
    }
    else
    {
       this.nav("rep");
    }
  }

  AttemptDeed()
  {
    this.zzz.AttemptDeed();

    if (this.zzz.Warrior.IsMaxLevel)
    {
      this.nav("title");      
    }
    else
    {
      this.nav("rep");
    }
  }

  UpgradeMarket()
  {
    this.zzz.UpgradeMarket();
    this.nav("rep");
  }

  UpgradeCamp()
  {
    this.zzz.UpgradeCamp(); 
    this.nav("rep");
  }

  private nav(target:string)
  {
       let link = [target];
       this.router.navigate(link);
  }

}
