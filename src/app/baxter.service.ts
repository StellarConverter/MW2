
import { Injectable } from '@angular/core';
import { StuffRoot} from './classes/StuffRoot';

@Injectable()
export class BaxterService 
{
  static _stuffRoot:StuffRoot;

  getStuff() : StuffRoot
  {
    if (BaxterService._stuffRoot == null)
    {
      BaxterService._stuffRoot = new StuffRoot();


//cheat zone
      //BaxterService._stuffRoot.Gold = 9999;
      //BaxterService._stuffRoot.Camp.Level = 100;

    }
    
    return BaxterService._stuffRoot;
  }

  Reset()
  {
     BaxterService._stuffRoot = null;//LOLCAT this oes not in fact work
     alert("this shouldreset things but it ctually does snot");
  }
  
}
