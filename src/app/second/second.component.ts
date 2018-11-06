import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  constructor(public el: ElementRef) {
    el.nativeElement.style.color = null;
  }
  ngOnInit() {
  }

  public someFunction() {
    return 'testing viewChild';
  }


}
