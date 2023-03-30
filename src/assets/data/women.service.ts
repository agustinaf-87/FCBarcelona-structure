import { Injectable } from '@angular/core';
import { WomenList } from '../../app/card-collection/women-list';
import { IWomenMember  } from '../../app/card-collection/interfaces/IWomenMember';
import { WomenListEn } from 'src/app/card-collection/women-listEn';

@Injectable({
  providedIn: 'root'
})
export class WomenService {

  womenList: IWomenMember[] = WomenList;
  womenListEn : IWomenMember[] = WomenListEn;
  
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  public getAllWomen(): IWomenMember[] {
    return this.womenList;
  }

  public getAllWomenEn(): IWomenMember[] {
    return this.womenListEn;
  }

}
