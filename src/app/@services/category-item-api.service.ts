import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryAPIService {
  private apiUrl = '/api/DailyExpense'; 

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getall`);
  }
}

@Injectable({
  providedIn: 'root'
})
export class ItemAPIService {
  private apiUrl = '/api/DailyExpense'; 

  constructor(private http: HttpClient) { }

  getItemsByCategory(categoryId: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/getbycategory/${categoryId}`);
  }
}
