import { FormControl, FormGroup } from '@angular/forms';
import { User } from './../interfaces/userInterface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class HttpServiceService {
  LoggedIn: boolean = false;
  apiURL: string = environment.urlBack;

  constructor(private http: HttpClient) {}

  cadastrar(user: User) {
    this.http.post('', user);
  }

  logout(): Observable<any> {
    this.LoggedIn = false;
    return this.http.get(this.apiURL + '/logout');
  }

  login(user: FormGroup): Observable<any> {
    console.log(
      window.btoa(`${user.get('name')?.value}:${user.get('password')?.value}`)
    );
    return this.http.get<any>(this.apiURL + '/login', {
      headers: {
        Authorization: `Basic ${window.btoa(
          `${user.get('name')?.value}:${user.get('password')?.value}`
        )}`,
      },
    });
  }
  LoginWithGoogle(credentials: string): Observable<any> {
    return this.http.post<any>(
      this.apiURL + 'LoginWithGoogle',
      JSON.stringify(credentials),
      {
        headers: {
          'Content-type': 'application/json',
        },
      }
    );
  }
}
