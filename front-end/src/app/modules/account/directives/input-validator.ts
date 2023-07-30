import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

import { NG_VALIDATORS, NgControl } from '@angular/forms';

@Directive({
  selector: '[appInputValidation]',
})
export class InputValidatorDirective {
  private errorMessageElement!: HTMLElement;
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private ngControl: NgControl
  ) {
    this.errorMessageElement = this.renderer.createElement('span');
    this.renderer.addClass(this.errorMessageElement, 'error-message');
    this.renderer.setStyle(this.errorMessageElement, 'color', 'red');
    this.renderer.setStyle(this.errorMessageElement, 'display', 'none');
    this.renderer.insertBefore(
      this.el.nativeElement.parentNode,
      this.errorMessageElement,
      this.el.nativeElement.nextSibling
    );
  }

  @HostListener('focusout')
  onFocusOut() {
    const control = this.ngControl.control;
    if (control?.invalid && (control.dirty || control.touched)) {
      this.renderer.addClass(this.el.nativeElement, 'login');
      this.showErrorMessage('Este campo es requerido.');
    } else if (!control?.value || control.value.trim() === '') {
      this.renderer.addClass(this.el.nativeElement, 'login');
      this.showErrorMessage('Este campo es requerido.');
    } else {
      this.renderer.removeClass(this.el.nativeElement, 'login');
      this.hideErrorMessage();
    }
  }
  private showErrorMessage(message: string) {
    this.renderer.setStyle(this.errorMessageElement, 'display', 'block');
    this.errorMessageElement.textContent = message;
  }

  private hideErrorMessage() {
    this.renderer.setStyle(this.errorMessageElement, 'display', 'none');
    this.errorMessageElement.textContent = '';
  }
}
