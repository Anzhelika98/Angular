import {AfterContentInit, AfterViewInit, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor() {
  }

  @Output() public childName = new EventEmitter();
  @Input('alias') public parent;


  public fire() {
    this.childName.emit('from child component');
  }


  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(`ngAfterViewInit`);
  }

  ngAfterViewInit() {
    console.log('child view');
  }
}
