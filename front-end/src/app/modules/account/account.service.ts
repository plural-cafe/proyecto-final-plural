import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/interfaces/User';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  private readonly URL_APP: string = environment.apiUrl;
  private readonly URL_API_PET: string = 'api/users/';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${this.URL_APP}${this.URL_API_PET}`);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.URL_APP}${this.URL_API_PET}${id}`);
  }

  postUser(user: User): Observable<User> {
    return this.http.post<User>(`${this.URL_APP}${this.URL_API_PET}`, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.URL_APP}${this.URL_API_PET}`, user);
  }

  deleteUser(id: number): Observable<any> {
    return this.http.delete(`${this.URL_APP}${this.URL_API_PET}${id}`);
  }
}
