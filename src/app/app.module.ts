import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TestComponent} from './test/test.component';
import {HighlightDirective} from './highlight.directive';
import {PopupComponent} from './popup/popup.component';
import {PopupService} from './popup.service';
import {ReactiveFormComponent} from './reactive-form/reactive-form.component';
import {ReverseStrPipe} from './reverse-str.pipe';
import {ColorDirective} from './color.directive';
import {SecondComponent} from './second/second.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HeroFormComponent} from './hero-form/hero-form.component';
import {FirstComponent} from './first/first.component';
import {NumberDirective} from './new.directive';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    HighlightDirective,
    PopupComponent,
    ReactiveFormComponent,
    ReverseStrPipe,
    ColorDirective,
    SecondComponent,
    HeroFormComponent,
    FirstComponent,
    NumberDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [PopupService],
  entryComponents: [PopupComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
