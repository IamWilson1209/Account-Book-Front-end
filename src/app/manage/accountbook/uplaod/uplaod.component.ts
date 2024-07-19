import { DailyExpenseUploadDto, UploadFileDto } from './../../../@models/dailyexpenseupload.model';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DailyExpenseDto } from 'src/app/@models/DailyExpense.model';
import { CategoryAPIService } from 'src/app/@services/category-api.service';
import { ItemAPIService } from 'src/app/@services/item-api.service';
import { BankAPIService } from 'src/app/@services/bank-api.service';
import { DailyExpenseService } from 'src/app/@services/dailyexpense.service';

@Component({
  selector: 'app-uplaod',
  templateUrl: './uplaod.component.html',
  styleUrls: ['./uplaod.component.scss']
})
export class UplaodComponent implements OnInit{

  dailyExpenses: DailyExpenseDto[] = [];
  banks: string[] = [];
  categories: any[] = [];
  items: any[] = [];
  selectedBank = '';
  selectedCategory: any;
  selectedItem: any;
  recordDateTime: string = '';
  cost: number = 0;
  remark: string = '';
  uploadFile: UploadFileDto[] = [];


  constructor(
    private dailyExpenseService: DailyExpenseService, 
    private bankAPIService: BankAPIService,
    private categoryAPIService: CategoryAPIService,
    private itemAPIService: ItemAPIService,
  ) { }

  // 初始化直接顯示所有消費
  ngOnInit(): void {
    this.getAllBanks();
    this.getAllCategories();
    // this.getAllItems();
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

  onCategoryChange(category: any): void{
    console.log('Category data type:', typeof category);
    console.log('Category:', category);


    this.itemAPIService.getItemsByCategory(this.selectedCategory.CategoryId).subscribe(items =>{
      console.log('Fetched Items:', items);
      this.items = items;
    }, error => {
      console.error('Error fetching items:', error);
    });
  }

  onFileChange(event: any) {
    const files: FileList = event.target.files;
    if (files) {
      this.uploadFile = [];
      Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          const content = e.target.result;
          this.uploadFile.push({
            Name: file.name,
            Src: content
          });
        };
        reader.readAsDataURL(file); // 或者使用 readAsText 或 readAsArrayBuffer，根據需要
      });
    }
  }

  onSubmit() {
    const dailyExpenseUploadDto: DailyExpenseUploadDto = {
      RecordDateTime: new Date(this.recordDateTime),
      Category: this.selectedCategory.CategoryName,
      Item: this.selectedItem,
      Cost: this.cost,
      Bank: this.selectedBank,
      Remark: this.remark,
      UploadFile: this.uploadFile
    };
    // 在這裡確保this.selectedCategory和this.selectedItem已經被正確賦值
    console.log('this.selectedCategory', this.selectedCategory);
    console.log('this.selectedItem', this.selectedItem);
    // 回傳上傳成功或失敗
    this.dailyExpenseService.addDailyExpense(dailyExpenseUploadDto).subscribe((response: any) => {
      console.log('Upload successful', response);
      alert(response.message); // 顯示成功訊息
    }, error => {
      console.error('Upload error', error);
      alert(error.error.message); // 顯示錯誤訊息
    });
  }
}