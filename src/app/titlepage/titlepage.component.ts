import { Component, OnInit } from '@angular/core';
import { BaxterService } from '../baxter.service';
import { StuffRoot } from '../classes/StuffRoot';

@Component({
  selector: 'app-titlepage',
  templateUrl: './titlepage.component.html',
  styleUrls: ['./titlepage.component.css'],
  providers: [BaxterService]
})
export class TitlepageComponent implements OnInit
{
   zzz:StuffRoot;
   public GameTitle:string;

  constructor(private qq:BaxterService) { }

  ngOnInit() 
  {
    this.zzz = this.qq.getStuff();
    this.GameTitle = "Mighty Warrior";
  }

  resetEverything()
  {
    this.qq.Reset();
  }
}
