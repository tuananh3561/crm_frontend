import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

// routing
const routes: Routes = [
  {
    path: 'email',
    loadChildren: () => import('./email-manger/email-manger.module').then(m => m.EmailMangerModule)
  },
  {
    path: 'file',
    loadChildren: () => import('./file-manager/file-manager.module').then(m => m.FileManagerModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./product-manger/product-manger.module').then(m => m.ProductMangerModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user-manger/user-manger.module').then(m => m.UserMangerModule)
  },
];

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class SystemModule { }
