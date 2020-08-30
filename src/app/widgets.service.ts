import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WidgetsService {
  constructor(
    private http: HttpClient
  ) { }
  url = 'http://127.0.0.1:3000/widget/index.json'
  getWidgets () {
    return this.http.get(this.url);
  }
}
