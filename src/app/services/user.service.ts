import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  private handleError(error: any) {
    return throwError(error.error);
  }

  createUser(user: User): Observable<any> {
    return this.httpClient
      .post<User[]>(environment.API_URL + `/api/v1/user`, user)
      .pipe(catchError(this.handleError));
  }

  getUsers(): Observable<any> {
    return this.httpClient
      .get<User[]>(environment.API_URL + `/api/v1/user`)
      .pipe(catchError(this.handleError));
  }

  getUserById(_id: string): Observable<any> {
    return this.httpClient
      .get<User[]>(environment.API_URL + `/api/v1/user/${_id}`)
      .pipe(catchError(this.handleError));
  }

  updateUser(_id: string, user: User): Observable<any> {
    return this.httpClient
      .put<User[]>(environment.API_URL + `/api/v1/user/${_id}`, user)
      .pipe(catchError(this.handleError));
  }

  deleteUser(_id: string): Observable<any> {
    return this.httpClient
      .delete<User[]>(environment.API_URL + `/api/v1/user/${_id}`)
      .pipe(catchError(this.handleError));
  }
}
