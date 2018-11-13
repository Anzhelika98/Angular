import {NgModule} from '@angular/core';
import {UsefulService} from '../service/UsefulService';
import {ServiceExampleComponent} from '../service-example/service-example.component';

@NgModule({
  declarations:[ServiceExampleComponent],
  imports:[],
  exports:[ServiceExampleComponent],
  providers:[UsefulService]
})
export class SecondModule{

}
