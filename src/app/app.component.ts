import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
  form: FormGroup;
  name: FormControl;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit():void {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]]
    });
    this.name = this.form.get('name') as FormControl;
  }
}
