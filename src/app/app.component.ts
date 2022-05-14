import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

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
    }, { validators: this.checkPasswords })

  }

  checkPasswords(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const passwordConfirm = group.get('passwordConfirm')?.value;
    

    return password === passwordConfirm ? null : { notSame: true }
  }
}
