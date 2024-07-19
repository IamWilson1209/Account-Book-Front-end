import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountbookComponent } from './accountbook.component';
import { SearchComponent } from './search/search.component';
import { UplaodComponent } from './uplaod/uplaod.component';

const routes: Routes = [
  { path: '', component: AccountbookComponent },
  { path: 'search', component: SearchComponent },
  { path: 'upload', component: UplaodComponent },
  { path: 'analysis', component: SearchComponent },
  { path: 'accountbook settings', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountbookRoutingModule { }
