import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.scss']
})

export class TranslationComponent implements OnInit {

  constructor(
    public translate: TranslateService
  ) { 
    translate.addLangs(['en', 'es']);
    translate.setDefaultLang('es');

    if(localStorage.getItem("locale")) {
      translate.setDefaultLang(localStorage.getItem("locale") || "[]");
      translate.use(localStorage.getItem("locale") || "[]");
    } else {
      const browserLang = translate.getBrowserLang();
      translate.setDefaultLang(browserLang || "[]");
      translate.use(browserLang?.match(/en|es/) ? browserLang : "en");
      localStorage.setItem("locale", browserLang || "[]");
    }

  }

  switchLanguage(lang:string){
    this.translate.use(lang);
    this.translate.setDefaultLang(lang);
    localStorage.setItem("locale", lang);
  }


  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOnInit() {
  }


}

