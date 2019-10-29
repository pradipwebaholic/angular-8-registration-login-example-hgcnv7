import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'
@Injectable({ providedIn: 'root' })
export class AppService {

  constructor(private http: HttpClient) { }

  getAllData(): Observable<DataModel[]> {
    return this.http.get<DataModel[]>('https://jsonplaceholder.typicode.com/photos');
  }

}
export interface DataModel {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl:string;
}