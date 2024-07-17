import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {
  private url = '/api/DailyExpense/getcategories';

  constructor(private http: HttpClient) { }

  getAllCategories() {
    console.log('Fetching Daily Expenses for Categories');
    return this.http.get<string[]>(this.url);
  }
}