
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
    }
    
    return BaxterService._stuffRoot;
  }
  
}
