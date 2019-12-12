import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(environment.API_URL + '/usuarios');
  }

  getById(id: number) {
    return this.http.get(environment.API_URL + '/usuarios/' + id);
  }

  create(user: any) {
    return this.http.post(environment.API_URL + '/usuarios', user);
  }

  update(user: any) {
    return this.http.put(environment.API_URL + '/usuarios', user);
  }

  delete(id: number) {
    return this.http.delete(environment.API_URL + '/usuarios/' + id);
  }
}
