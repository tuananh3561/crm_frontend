import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FakeDbService } from '@fake-db/fake-db.service';

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from "../@core/core.module";
import { CoreCommonModule } from "../@core/common.module";
import { CoreSidebarModule, CoreThemeCustomizerModule } from "../@core/components";

import { coreConfig } from 'app/configs/app-config';

import { AppComponent } from './app.component';

import { LayoutModule } from 'app/layout/layout.module';

import { ErrorInterceptor, fakeBackendProvider, JwtInterceptor } from "./auth/helpers";
import { SharedModule } from "./shared/shared.module";

const routes: Routes = [
	{
		path         : 'pages',
		loadChildren : () => import('./main/pages/pages.module').then (m => m.PagesModule)
	},
	{
		path         : 'miscellaneous',
		loadChildren : () => import('./modules/miscellaneous/miscellaneous.module').then (m => m.MiscellaneousModule)
	},
	{
		path         : 'authentication',
		loadChildren : () => import('./modules/authentication/authentication.module').then (m => m.AuthenticationModule)
	},
	{
		path         : 'accounts',
		loadChildren : () => import('./modules/account-settings/account-settings.module').then (m => m.AccountSettingsModule)
	},
	{
		path         : 'systems',
		loadChildren : () => import('./modules/system/system.module').then (m => m.SystemModule)
	},
	{
		path       : '',
		redirectTo : '/authentication/login',
		pathMatch  : 'full'
	},
	{
		path       : '**',
		redirectTo : '/pages/miscellaneous/error' //Error 404 - Page not found
	},
];

@NgModule ({
	declarations : [
		AppComponent
	],
	imports      : [
		BrowserModule,
		BrowserAnimationsModule,
		MatSliderModule,
		HttpClientModule,
		HttpClientInMemoryWebApiModule.forRoot(FakeDbService, {
			delay: 0,
			passThruUnknownUrl: true
		}),
		TranslateModule.forRoot (),
		//Routing
		RouterModule.forRoot (routes, {
			scrollPositionRestoration : 'enabled',
			relativeLinkResolution    : 'legacy'
		}),
		//NgBootstrap
		NgbModule,
		ToastrModule.forRoot (),
		
		// Core modules
		CoreModule.forRoot (coreConfig),
		CoreCommonModule,
		CoreSidebarModule,
		CoreThemeCustomizerModule,
		
		// App modules
		LayoutModule,
		SharedModule,
	],
	providers: [
		{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
		{ provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
		// ! IMPORTANT: Provider used to create fake backend, comment while using real API
		fakeBackendProvider
	],
	bootstrap    : [AppComponent]
})
export class AppModule {
}
