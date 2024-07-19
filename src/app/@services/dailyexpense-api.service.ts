import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DailyExpenseDto } from '../@models/dailyexpense.model';
import { DailyExpenseUploadDto } from '../@models/dailyexpenseupload.model';

@Injectable({
  providedIn: 'root'
})
export class DailyExpenseApiService {
  private url = '/api/DailyExpense';

  constructor(private http: HttpClient) { }

  getallDailyExpensesApi() {
    return this.http.get<DailyExpenseDto[]>(this.url);
  }

  getDailyExpensesByFilter(startDate: string, endDate: string, bank: string, category: string, item: string) {  
    // 處理 HTTP 請求中的查詢參數，可以將這個查詢字符串附加到 HTTP 請求中，向後端服務發送帶有參數的 GET 請求
    console.log(`Fetching Daily Expenses for ${startDate} to ${endDate} ; bank: ${bank} ; category: ${category} ; item: ${item}`);
    let params = new HttpParams();
    if (startDate) {
      params = params.set('startDate', startDate);
    }
    if (endDate) {
      params = params.set('endDate', endDate);
    }
    if (bank) {
      params = params.set('bank', bank);
    }
    if (category) {
        params = params.set('category', category);
    }
    if (item) {
    params = params.set('item', item);
    }
    return this.http.get<DailyExpenseDto[]>(`${this.url}/byFilter`, { params });
  }

  addDailyExpenseApi(value: DailyExpenseUploadDto) {
    console.log(`Fetching Daily Expenses for 新增`, JSON.stringify(value));
    return this.http.post<DailyExpenseUploadDto>(`${this.url}/postdailyexpense`, value);
  }

}
