import { NotfoundComponent } from './notfound/notfound.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './@guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'manage',
    canActivateChild: [AuthGuard],
    loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule)
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // 將路由配置註冊為應用程式的根路由
  exports: [RouterModule]
})
export class AppRoutingModule { }