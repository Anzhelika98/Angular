import {Component, OnInit} from '@angular/core';
import {UsefulService} from '../service/UsefulService';

@Component({
  selector: 'app-service-example',
  templateUrl: './service-example.component.html',
  styleUrls: ['./service-example.component.css']
})
export class ServiceExampleComponent implements OnInit {

  constructor(private usefulService: UsefulService) {
  }

  ngOnInit() {

    this.getData();
  }

  public getData(): void {
    console.log(this.usefulService.getData());

  }

}
