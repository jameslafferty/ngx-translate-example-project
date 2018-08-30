import { NgModule } from '@angular/core';
import { MyLibComponent } from './my-lib.component';
import { TranslateModule, TranslateLoader, MissingTranslationHandler, MissingTranslationHandlerParams } from '@ngx-translate/core';
import { Observable, Subject } from 'rxjs';

export class Loader implements TranslateLoader {
  private translations = new Subject();
  $translations = this.translations.asObservable();
  getTranslation(lang: string) {
    console.log(`called with ${lang}`);
    return this.$translations;
  }
}

export class Awol implements MissingTranslationHandler {
  handle(params: MissingTranslationHandlerParams) {
    return '... and many more';
  }
}

export function LoaderFactory() {
  return new Loader();
}


@NgModule({
  imports: [
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: LoaderFactory
      },
      missingTranslationHandler: {
        provide: MissingTranslationHandler,
        useClass: Awol
      }
    }),
  ],
  declarations: [MyLibComponent],
  exports: [
    MyLibComponent,
    TranslateModule
  ]
})
export class MyLibModule { }
