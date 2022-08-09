import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';



@NgModule({
  declarations: [
  
    LoginComponent,
       RegisterComponent,
       ForgotPasswordComponent,
       ResetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
