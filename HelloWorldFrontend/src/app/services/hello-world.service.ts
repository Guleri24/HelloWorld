import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {HelloWorld} from "../models/helloworld.model";

const baseUrl = 'http://localhost:8080/api/helloworlds';

@Injectable({
  providedIn: 'root'
})
export class HelloWorldService {

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<HelloWorld[]> {
    return this.http.get<HelloWorld[]>(baseUrl);
  }

  get(id: any): Observable<HelloWorld> {
    return this.http.get(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseUrl);
  }

  findByName(name: any): Observable<HelloWorld[]> {
    return this.http.get<HelloWorld[]>(`${baseUrl}?name=${name}`);
  }
}
