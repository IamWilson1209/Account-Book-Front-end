import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AccountbookRoutingModule } from './accountbook-routing.module';
import { AccountbookComponent } from './accountbook.component';
import { DatePipe } from '@angular/common';
import { AccountbookFunctionComponent } from './accountbook-function/accountbook-function.component';


@NgModule({
  declarations: [
    AccountbookComponent,
    AccountbookFunctionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  
    AccountbookRoutingModule
  ],
  providers: [DatePipe],
})
export class AccountbookModule { }
