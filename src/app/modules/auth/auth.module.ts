import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { LoginComponent } from './login/login.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';



@NgModule({
  declarations: [
    NotFoundComponent,
    ForbiddenComponent,
    LoginComponent,
    LoginAdminComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
