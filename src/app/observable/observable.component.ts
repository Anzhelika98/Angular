import {Component} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent {

  static sequence: Observable<number>;
  static array = [10, 20, 30, 40, 50];

  static f(): Observable<number> {
    ObservableComponent.sequence = new Observable(observer => {
      for (const a of ObservableComponent.array) {
        observer.next(a);
      }
      observer.complete();
    });

    return ObservableComponent.sequence;
  }


  // Observable from array
  static arr = from([10, 20, 30, 40]);
  static subscribe = ObservableComponent.arr.subscribe((x) => console.log(x));

//of
  static arr1 = of([10, 11, 12, 13, 14]);
  static subscribe1 = ObservableComponent.arr1.subscribe(x => console.log(x));


  static observer = from([1, 2, 3, 4, 5]);
  static observer2 = of(10, 20, 30, 40);
  static myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };
  static ob1 = ObservableComponent.observer.subscribe(ObservableComponent.myObserver);

  static ob2 = ObservableComponent.observer2.subscribe(ObservableComponent.myObserver);



}


