import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {
  private url = '/api/DailyExpense/getcategories';

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any> {
    console.log('Fetching Daily Expenses for Categories');
    return this.http.get<any>(this.url);
  }
}