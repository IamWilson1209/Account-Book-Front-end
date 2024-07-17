import { Component, OnInit, ElementRef, Renderer2 } from '@angular/core';
import { DailyExpenseService } from 'src/app/@services/dailyexpense.service';
import { DailyExpenseDto } from 'src/app/@models/DailyExpense.model';
import { CategoryAPIService } from 'src/app/@services/category-api.service';
import { ItemAPIService } from 'src/app/@services/item-api.service';
import { BankAPIService } from 'src/app/@services/bank-api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  dailyExpenses: DailyExpenseDto[] = [];
  banks: string[] = [];
  categories: string[] = [];
  items: string[] = [];
  startDate = '';
  endDate = '';
  selectedBank = '';
  selectedCategory = '';
  selectedItem = '';


  constructor(
    private dailyExpenseService: DailyExpenseService, 
    private bankAPIService: BankAPIService,
    private categoryAPIService: CategoryAPIService,
    private itemAPIService: ItemAPIService,
    private elementRef: ElementRef, private renderer: Renderer2
  ) { }

  // 初始化直接顯示所有消費
  ngOnInit(): void {
    this.getAllDailyExpenses();
    this.getAllBanks();
    this.getAllCategories();
    this.getAllItems();
  }

  // 取得所有資料
  getAllDailyExpenses() {
    this.dailyExpenseService.getAllDailyExpenses();
    setTimeout(() => {  // 用 setTimeout 模擬延遲以確保資料已被設定
      this.dailyExpenses = this.dailyExpenseService.dailyExpenseDataList;
    }, 1000);
  }

  // 取得所有日期範圍內的資料
  fetchDailyExpensesByFilter() {
    this.dailyExpenseService.getDailyExpensesByFilter(this.startDate, this.endDate, this.selectedBank, this.selectedCategory, this.selectedItem)
      .subscribe(data => {
        this.dailyExpenses = data;
      });
  }

  // 取得所有銀行資料
  getAllBanks(){
    this.bankAPIService.getAllBanks().subscribe(banks =>{
      this.banks = banks;
    });
  }

  getAllCategories(){
    this.categoryAPIService.getAllCategories().subscribe(categories =>{
      this.categories = categories;
    });
  }

  getAllItems(){
    this.itemAPIService.getAllItems().subscribe(items =>{
      this.items = items;
    });
  }

  // 處理變更
  onBankChange() {
    console.log(this.selectedBank);
    console.log(this.selectedCategory);
    console.log(this.selectedItem);
  }

}
