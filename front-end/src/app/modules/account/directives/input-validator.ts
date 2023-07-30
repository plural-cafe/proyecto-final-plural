import { Directive, Input } from '@angular/core';
import {
  AbstractControl,
  NG_VALIDATORS,
  ValidationErrors,
} from '@angular/forms';

@Directive({
  selector: '[appInputValidation]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: InputValidatorDirective,
      multi: true,
    },
  ],
})
export class InputValidatorDirective {
  @Input('appInputValidation') validationType: string | undefined;

  validate(control: AbstractControl): ValidationErrors | null {
    if (!this.validationType) {
      return null;
    }

    const value = control.value;
    const valid = this.isValid(value);

    if (valid != null && !valid) {
      return { [this.validationType]: true };
    }

    return null;
  }

  private isValid(value: any): boolean {
    // Implement your custom validation logic here
    // For example, check the length, characters, etc.
    // Return true if the value is valid, false otherwise
    return true;
  }

  constructor() {}
}
