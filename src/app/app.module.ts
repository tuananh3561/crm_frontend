import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSliderModule } from '@angular/material/slider';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import 'hammerjs';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { ToastrModule } from 'ngx-toastr'; // For auth after login toast

import { CoreModule } from "../@core/core.module";
import { CoreCommonModule } from "../@core/common.module";
import { CoreSidebarModule, CoreThemeCustomizerModule } from "../@core/components";

import { coreConfig } from 'app/configs/app-config';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LayoutModule } from 'app/layout/layout.module';
import { SampleModule } from "./main/sample/sample.module";

@NgModule ({
	declarations : [
		AppComponent
	],
	imports      : [
		BrowserModule,
		BrowserAnimationsModule,
		MatSliderModule,
		HttpClientModule,
		TranslateModule.forRoot (),
		
		//Routing
		AppRoutingModule,
		
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
		SampleModule
	],
	providers    : [],
	bootstrap    : [AppComponent]
})
export class AppModule {
}
