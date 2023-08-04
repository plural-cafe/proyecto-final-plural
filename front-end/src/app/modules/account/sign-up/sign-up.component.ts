import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces/User';
import { AccountService } from '../account.service';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private accountService: AccountService
  ) {
    this.form = formBuilder.group({
      name: ['', Validators.required],
      nickname: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
    });
  }

  addUser(user: User) {
    this.accountService.postUser(user).subscribe(
      (response) => {
        console.log('Usuario agregado correctamente', response);
        // Lógica adicional después de agregar el usuario, si es necesario
      },
      (error) => {
        console.error('Error al agregar usuario', error);
        // Lógica adicional para manejar errores, si es necesario
      }
    );
  }

  signup(): void {
    const user: User = {
      nickname: this.form.value.nickname,
      name: this.form.value.name,
      password: this.form.value.password,
      email: this.form.value.email,
    };

    console.log(user);
    this.addUser(user);
  }
}
