import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class ApisharedService {

    private url = 'https://jsonplaceholder.typicode.com/todos';



  constructor(private http: HttpClient) { 


  }


  public getData(): Observable<any> {
    return this.http.get<any>(this.url);
  }


}
