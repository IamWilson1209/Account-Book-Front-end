import { Injectable } from '@angular/core';
import { DailyExpenseDto } from '../@models/DailyExpense.model';
import { DailyExpenseApiService } from './dailyexpense-api.service';

@Injectable({
  providedIn: 'root'
})
export class DailyExpenseService {
  dailyExpenseDataList: DailyExpenseDto[] = [];

  constructor(private dailyExpenseApiService: DailyExpenseApiService) { }

  getAllDailyExpenses() {
    this.dailyExpenseApiService.取得資料().subscribe(data => {
      this.dailyExpenseDataList = data;
    });
  }

  getDailyExpensesByFilter(startDate: string, endDate: string, bank: string, category: string, item: string) {
    console.log(`Fetching Daily Expenses for ${startDate} to ${endDate} ; bank: ${bank} ; category: ${category} ; item: ${item}`);
    return this.dailyExpenseApiService.getDailyExpensesByFilter(startDate, endDate, bank, category, item);
  }
}
