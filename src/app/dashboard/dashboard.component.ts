import { Component, OnInit } from '@angular/core';
import { BaxterService } from '../baxter.service';
import { StuffRoot } from '../classes/StuffRoot';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
providers: [BaxterService]
})
export class DashboardComponent implements OnInit {

  constructor(private qq : BaxterService) { }

  private zzz:StuffRoot;

  ngOnInit() {
    this.zzz = this.qq.getStuff();
    
  }

}
