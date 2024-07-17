import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountbookComponent } from './accountbook.component';

const routes: Routes = [{ path: '', component: AccountbookComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountbookRoutingModule { }
