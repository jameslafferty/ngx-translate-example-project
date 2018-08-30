import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'lib-my-lib',
  template: `
    <p>
    {{ 'my-other-string' | translate }}
    </p>
  `,
  styles: []
})
export class MyLibComponent implements OnInit {

  constructor(private translate: TranslateService) {
    console.log(translate.currentLoader);
  }

  ngOnInit() {
    console.log(this.translate.currentLang);
  }

}
