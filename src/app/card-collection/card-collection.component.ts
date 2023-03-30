import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { WomenService } from 'src/assets/data/women.service';


@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.scss']
})
export class CardCollectionComponent {

  constructor(private womenService: WomenService = new WomenService(), public translate: TranslateService, 
  ){

  }
  
  women = this.womenService.getAllWomen(); 

  womenEn = this.womenService.getAllWomenEn(); 

  currentLang(){
    return this.translate.currentLang
  }
}
