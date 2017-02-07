import { Component, OnInit } from '@angular/core';
import { BaxterService } from '../baxter.service';
import { StuffRoot } from '../classes/StuffRoot';
import { BaseCard } from '../classes/cards';


@Component({
  selector: 'app-reportpage',
  templateUrl: './reportpage.component.html',
  styleUrls: ['./reportpage.component.css'],
  providers: [BaxterService]
})
export class ReportpageComponent implements OnInit 
{

  constructor(private qq : BaxterService) { }

  private zzz:StuffRoot;

   ngOnInit()
   {
     this.zzz = this.qq.getStuff();
   }

   
}