import {Injectable} from '@angular/core';

@Injectable()
export class UsefulService {

  private date = new Date();

  public getData() {

    return this.date;
  }


}
