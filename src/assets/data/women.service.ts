import { Injectable } from '@angular/core';
// import { IWomen } from '../../app/card-collection/interfaces/IWomen';
import { WomenList } from '../../app/card-collection/women-list';
import { IWomenMember  } from '../../app/card-collection/interfaces/IWomenMember';

@Injectable({
  providedIn: 'root'
})
export class WomenService {

  womenList: IWomenMember[] = WomenList;
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  public getAllWomen(): IWomenMember[] {
    return this.womenList;
  }

}
