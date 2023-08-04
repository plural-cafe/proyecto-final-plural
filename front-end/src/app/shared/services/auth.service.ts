import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated = false;

  constructor() {}

  get isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }

  login() {
    // Aquí puedes implementar la lógica para iniciar sesión
    // y cambiar el valor de isAuthenticated a true.
    this.isAuthenticated = true;
  }

  logout() {
    // Aquí puedes implementar la lógica para cerrar sesión
    // y cambiar el valor de isAuthenticated a false.
    this.isAuthenticated = false;
  }
}
