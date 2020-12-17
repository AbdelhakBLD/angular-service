import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable < User[] > {
    return this.httpClient.get<User[]>("http://localhost:3000/users");
  }

  create(user : User): Observable <User> {
    return this.httpClient.post<User>("http://localhost:3000/users", user);
  }

  update(user : User): Observable < User > {
    return this.httpClient.put<User>("http://localhost:3000/users", user);
  }

  delete(id : number):any {
    return this.httpClient.delete<User>("http://localhost:3000/users/"+id);
  }
}

