import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() women:any; 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  @Input() womenEn:any;
}
