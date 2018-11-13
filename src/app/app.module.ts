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
import { ObservableComponent } from './observable/observable.component';
import { EntryComponent } from './entry/entry.component';
import { ServiceExampleComponent } from './service-example/service-example.component';
import {UsefulService} from './service/UsefulService';
import {SecondModule} from './observable/second.module';
import {load} from '@angular/core/src/render3/instructions';

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
    NumberDirective,
    ObservableComponent,
    EntryComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    SecondModule
  ],
  providers: [PopupService,UsefulService],
  entryComponents: [PopupComponent, EntryComponent],

  bootstrap: [AppComponent]
})
export class AppModule {
}
