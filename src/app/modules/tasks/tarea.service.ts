import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TareaService {

  endpoint = environment.API_URL + '/tareas';

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
