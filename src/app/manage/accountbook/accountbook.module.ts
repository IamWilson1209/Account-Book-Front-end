import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountbookRoutingModule } from './accountbook-routing.module';
import { AccountbookComponent } from './accountbook.component';
import { DatePipe } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UplaodComponent } from './uplaod/uplaod.component';
import { ManageComponent } from './manage/manage.component';


@NgModule({
  declarations: [
    AccountbookComponent,
    SearchComponent,
    UplaodComponent,
    ManageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,  
    AccountbookRoutingModule
  ],
  providers: [DatePipe],
})
export class AccountbookModule { }
