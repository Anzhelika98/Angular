import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'reverseStr'
})
export class ReverseStrPipe  {
  public transform(value: string): string {

    let newStr: string = '';
    for (let i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }

    return newStr;
  }
}
