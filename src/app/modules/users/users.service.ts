import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  endpoint = environment.API_URL + '/usuarios';

  constructor(public http: HttpClient) { }

  getAll() {
    return this.http.get(this.endpoint);
  }

  getById(id: number) {
    return this.http.get(`${this.endpoint}/${id}`);
  }

  create(user: any) {
    return this.http.post(this.endpoint, user);
  }

  update(user: any) {
    return this.http.put(this.endpoint, user);
  }

  delete(id: number) {
    return this.http.delete(`${this.endpoint}/${id}`);
  }
}
