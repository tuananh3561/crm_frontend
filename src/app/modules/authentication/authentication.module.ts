import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CoreCommonModule } from "../../../@core/common.module";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";

// routing
const routes: Routes = [
	{
		path      : 'login',
		component : LoginComponent
	},
	{
		path      : 'register',
		component : RegisterComponent
	},
	{
		path      : 'reset-password',
		component : ResetPasswordComponent
	},
	{
		path      : 'forgot-password',
		component : ForgotPasswordComponent
	}
];

@NgModule ({
	declarations : [
		LoginComponent,
		RegisterComponent,
		ForgotPasswordComponent,
		ResetPasswordComponent
	],
	imports      : [
		CommonModule,
		RouterModule.forChild (routes),
		NgbModule,
		FormsModule,
		ReactiveFormsModule,
		CoreCommonModule
	]
})
export class AuthenticationModule {
}
