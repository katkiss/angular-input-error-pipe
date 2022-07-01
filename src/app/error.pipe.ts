import { Pipe, PipeTransform } from '@angular/core';
import { FormControl } from '@angular/forms';

@Pipe({
  name: 'error',
})
export class ErrorPipe implements PipeTransform {
  transform(invalid: boolean, touched: boolean, dirty: boolean): boolean {
    const isError = invalid && (touched || dirty);
    console.log(isError);
    return isError;
  }
}

@Pipe({
  name: 'errorIdealistic',
})
export class ErrorPipeIdealistic implements PipeTransform {
  transform(formControl: FormControl): boolean {
    const isError =
      formControl.invalid && (formControl.touched || formControl.dirty);
    console.log(isError);
    return isError;
  }
}
