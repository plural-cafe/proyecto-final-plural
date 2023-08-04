import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LogInComponent } from './log-in/log-in.component';
import { InputValidatorDirective } from './directives/input-validator';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AccountService } from './account.service';

@NgModule({
  declarations: [LogInComponent, InputValidatorDirective, SignUpComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AccountService],
  bootstrap: [LogInComponent],
  exports: [LogInComponent],
})
export class AccountModule {}
