import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidatorDirective } from './directives/input-validator';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [LogInComponent, InputValidatorDirective, SignUpComponent],
  imports: [CommonModule, ReactiveFormsModule],
  bootstrap: [LogInComponent],
  exports: [LogInComponent],
})
export class AccountModule {}
