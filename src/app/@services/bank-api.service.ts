import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankAPIService {
  private url = '/api/DailyExpense/getbanks';

  constructor(private http: HttpClient) { }

  getAllBanks() {
    console.log('Fetching Daily Expenses for bank');
    return this.http.get<string[]>(this.url);
  }
}
