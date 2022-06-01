import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'error'
})
export class ErrorPipe implements PipeTransform {

  transform(invalid: boolean, touched: boolean, dirty: boolean): any {
    const isError = invalid && (touched || dirty);
    console.log(isError);
    return isError;
  }

}