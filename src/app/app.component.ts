import {AfterViewInit, Component, Injector, ViewChild} from '@angular/core';
import {PopupService} from './popup.service';
import {User} from './user-mock';
import {SecondComponent} from './second/second.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  // @ViewChild('myInput') inputValue;
  // @ViewChild(SecondComponent) second: SecondComponent;
  //
  // constructor(injector: Injector, public popup: PopupService) {
  //   //
  //   // const PopupElement = createCustomElement(PopupComponent, {injector});
  //   //
  //   // customElements.define('popup-element', PopupElement);
  //
  //   setInterval(() => {
  //     this.send2Server();
  //   }, 3000);
  // }
  //
  // public send2Server() {
  //   console.log(this.inputValue.nativeElement.value);
  // }



  // public color;
  //
  // public name = 'App Component name';
  // public message;
  //
  // public value = 'inputing';
  // public Lang: string[];
  //
  // public Users: User[] = USERS;
  //
  // ngOnInit() {
  //   this.Lang = ['Java', 'JavaScript', 'C#'];
  // }
  //
  // ngAfterViewInit() {
  //   console.log('app view');
  // }
  //
  // ngAfterContentInit() {
  //   console.log('app content');
  // }
  //
  //
  // onClick(text) {
  //   console.log(text.value);
  // }
  //
  // public trackByFn(index, item) {
  //   return index;
  // }

  // public user: User = {
  //   id: 2,
  //   firstName: 'Ann',
  //   lastName: 'Harutyunyan'
  // };
  //
  // public randomColor: string;
  //
  // public getColor() {
  //   this.randomColor = 'pink';
  // }
  //
  // ngAfterViewInit() {
  //   console.log(this.second.someFunction());
  // }
}
