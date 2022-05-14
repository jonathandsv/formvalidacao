import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'formvalidacao';
  form: FormGroup

  constructor(private formBuilder: FormBuilder) {

    this.form = this.formBuilder.group({
      password: ['', Validators.required],
      passwordConfirm: ['', Validators.required]
    })

  }
}
