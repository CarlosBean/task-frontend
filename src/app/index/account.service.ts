import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from '../shared/models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  urlResource = environment.API_URL + "/account";

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: { cedula: string; password: string }): Observable<any> {
    return this.http.post(this.urlResource + '/login', credentials);
  }

  logout() {
    this.router.navigateByUrl('login');
  }

  signup(user: User): Observable<any> {
    return this.http.post(this.urlResource + '/signup', user);
  }

  initRecoverPass(email: string ): Observable<any> {
    return this.http.post(this.urlResource + '/reset-password/init', email);
  }

  finishRecoverPass(key: string, newPassword: string): Observable<any> {
    const URI = `${this.urlResource}/reset-password/finish?key=${key}`;
    return this.http.post(URI, newPassword);
  }

  //TODO: add change-password - active-account services
}
