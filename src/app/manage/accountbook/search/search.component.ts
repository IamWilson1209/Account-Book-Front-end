import { Component, OnInit} from '@angular/core';
import { DailyExpenseService } from 'src/app/@services/dailyexpense.service';
import { DailyExpenseDto } from 'src/app/@models/dailyexpense.model';
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
  categories: any[] = [];
  items: any[] = [];
  startDate = '';
  endDate = '';
  selectedBank = '';
  selectedCategory: any;
  selectedItem: any;


  constructor(
    private dailyExpenseService: DailyExpenseService, 
    private bankAPIService: BankAPIService,
    private categoryAPIService: CategoryAPIService,
    private itemAPIService: ItemAPIService,
  ) { }

  // 初始化直接顯示所有消費
  ngOnInit(): void {
    this.selectedBank = 'All Banks';
    this.selectedCategory = 'All Categories';
    this.selectedItem = 'All Items';
    this.getAllDailyExpenses();
    this.getAllBanks();
    this.getAllCategories();
  }

  // 取得所有資料
  getAllDailyExpenses() {
    this.dailyExpenseService.getAllDailyExpenses();
    setTimeout(() => {  // 用 setTimeout 模擬延遲以確保資料已被設定
      this.dailyExpenses = this.dailyExpenseService.dailyExpenseDataList;
    }, 1000);
  }

  // 取得所有篩選條件內的資料
  fetchDailyExpensesByFilter() {
    console.log('this.selectedCategory: ',this.selectedCategory)
    if (this.selectedCategory == 'All Categories'){
        console.log('this.selectedCategory: ',this.selectedCategory)
        this.dailyExpenseService.getDailyExpensesByFilter(this.startDate, this.endDate, this.selectedBank, this.selectedCategory, this.selectedItem)
          .subscribe(data => {
            this.dailyExpenses = data;
          });
    }
    else{    
        console.log('this.selectedCategory.CategoryName: ',this.selectedCategory.CategoryName)
        this.dailyExpenseService.getDailyExpensesByFilter(this.startDate, this.endDate, this.selectedBank, this.selectedCategory.CategoryName, this.selectedItem)
          .subscribe(data => {
            this.dailyExpenses = data;
          });
    }
  }

  // 取得所有銀行資料
  getAllBanks(){
    this.bankAPIService.getAllBanks().subscribe(banks =>{
      this.banks = banks;
    });
  }

  // 取得所有類別資料
  getAllCategories(){
    this.categoryAPIService.getAllCategories().subscribe(categories =>{
      this.categories = categories;
    });
  }

  // 按下Category後，找出對應的Item
  onCategoryChange(category: any): void{
    this.itemAPIService.getItemsByCategory(this.selectedCategory.CategoryId).subscribe(items =>{
      console.log('Fetched Items:', items);
      this.items = items;
    }, error => {
      console.error('Error fetching items:', error);
    });
  }



}
