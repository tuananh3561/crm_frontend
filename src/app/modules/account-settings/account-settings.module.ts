import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AuthGuard } from 'app/auth/helpers/auth.guards';
import { CoreCommonModule } from '@core/common.module';
import { ContentHeaderModule } from 'app/layout/components/content-header/content-header.module';
import { Ng2FlatpickrModule } from 'ng2-flatpickr';
import { AccountSettingComponent } from './account-setting/account-setting.component';
import { AccountSettingsService } from "./account-settings.service";

const routes: Routes = [
	{
		path: 'account-settings',
		component: AccountSettingComponent,
		canActivate: [AuthGuard],
		resolve: {
			accountSetting: AccountSettingsService
		},
		data: { animation: 'account-settings' }
	}
];

@NgModule({
  declarations: [
    AccountSettingComponent
  ],
  imports: [
	  CommonModule,
	  RouterModule.forChild(routes),
	  NgbModule,
	  CoreCommonModule,
	  ContentHeaderModule,
	  Ng2FlatpickrModule
  ],
	providers: [AccountSettingsService]
})
export class AccountSettingsModule { }
