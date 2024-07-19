// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ItemAPIService {
//   private url = '/api/DailyExpense/getitems';

//   constructor(private http: HttpClient) { }

//   getAllItems() {
//     console.log('Fetching Daily Expenses for Items');
//     return this.http.get<string[]>(this.url);
//   }
// }
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemAPIService {
  private apiUrl = '/api/DailyExpense'; 

  constructor(private http: HttpClient) { }

  getItemsByCategory(categoryId: string): Observable<any> {
    console.log('Fetching Daily Expenses for getItemsByCategory', categoryId);
    return this.http.get<any>(`${this.apiUrl}/getbycategory/${categoryId}`);
  }
}