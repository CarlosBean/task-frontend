import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RolService {
  endpoint = environment.API_URL + '/roles';

  constructor(public http: HttpClient) {}

  getAll() {
    return this.http.get(this.endpoint);
  }
}
