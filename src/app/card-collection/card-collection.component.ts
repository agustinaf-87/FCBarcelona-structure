import { Component } from '@angular/core';
import { WomenService } from 'src/assets/data/women.service';


@Component({
  selector: 'app-card-collection',
  templateUrl: './card-collection.component.html',
  styleUrls: ['./card-collection.component.scss']
})
export class CardCollectionComponent {

  constructor(private womenService: WomenService = new WomenService()){

  }
  women = this.womenService.getAllWomen(); 
}
