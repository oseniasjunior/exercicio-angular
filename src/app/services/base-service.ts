import {HttpClient, HttpUserEvent} from '@angular/common/http';
import {from, Observable} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {Injectable} from '@angular/core';

@Injectable()
export class BaseService<T> {
  urlBase = 'http://127.0.0.1:8000/api/sale/core';
  private _path: string;

  public set path(path: string) {
    this._path = path;
  }

  constructor(private http: HttpClient) {
  }

  public getAll(): Observable<T[]> {
    return this.http.get(`${this.urlBase}/${this._path}/`).pipe(
      tap(response => response as HttpUserEvent<T[]>),
      catchError(ex => from([]))
    );
  }

  public save(aObject: T): Observable<T> {
    return this.http.post(`${this.urlBase}/${this._path}/`, aObject).pipe(
      tap(response => response as HttpUserEvent<T>),
      catchError(ex => from([]))
    );
  }


}
