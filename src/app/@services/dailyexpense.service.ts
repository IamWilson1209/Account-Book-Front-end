import { Injectable } from '@angular/core';
import { DailyExpenseDto } from '../@models/dailyexpense.model';
import { DailyExpenseApiService } from './dailyexpense-api.service';
import { DailyExpenseUploadDto } from '../@models/dailyexpenseupload.model';

@Injectable({
  providedIn: 'root'
})
export class DailyExpenseService {
  dailyExpenseDataList: DailyExpenseDto[] = [];

  constructor(private dailyExpenseApiService: DailyExpenseApiService) { }

  getAllDailyExpenses() {
    this.dailyExpenseApiService.getallDailyExpensesApi().subscribe(data => {
      this.dailyExpenseDataList = data;
    });
  }

  getDailyExpensesByFilter(startDate: string, endDate: string, bank: string, category: string, item: string) {
    console.log(`Fetching Daily Expenses for ${startDate} to ${endDate} ; bank: ${bank} ; category: ${category} ; item: ${item}`);
    return this.dailyExpenseApiService.getDailyExpensesByFilter(startDate, endDate, bank, category, item);
  }

  addDailyExpense(value: DailyExpenseUploadDto) {
    console.log(`Fetching Daily Expenses for add function`, JSON.stringify(value));
    return this.dailyExpenseApiService.addDailyExpenseApi(value);
  }

}
