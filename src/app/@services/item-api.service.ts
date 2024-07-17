import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemAPIService {
  private url = '/api/DailyExpense/getitems';

  constructor(private http: HttpClient) { }

  getAllItems() {
    console.log('Fetching Daily Expenses for Items');
    return this.http.get<string[]>(this.url);
  }
}
