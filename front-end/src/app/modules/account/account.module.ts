import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogInComponent } from './log-in/log-in.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputValidatorDirective } from './directives/input-validator';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  declarations: [LogInComponent, InputValidatorDirective, SignUpComponent],
  imports: [CommonModule, AppRoutingModule, ReactiveFormsModule],
  bootstrap: [LogInComponent],
  exports: [LogInComponent],
})
export class AccountModule {}
