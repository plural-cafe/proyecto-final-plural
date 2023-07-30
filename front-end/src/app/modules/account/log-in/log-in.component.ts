import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss'],
})
export class LogInComponent {
  valideForm: boolean = true;
  form: FormGroup;
  email = 'juanca20042004@hotmail.com';
  password = 'hola123';

  constructor(formBuilder: FormBuilder) {
    this.form = formBuilder.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login(): boolean {
    if (
      this.form.get('nickname')?.value !== this.email ||
      this.form.get('password')?.value !== this.password
    ) {
      this.valideForm = false;
      console.log(this.valideForm);
      return false;
    } else {
      this.valideForm = true;
      console.log(this.valideForm);
      return true;
    }
  }
}
