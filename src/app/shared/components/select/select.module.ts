import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreCommonModule } from "../../../../@core/common.module";
import { FormsModule } from "@angular/forms";
import { NgSelectModule } from "@ng-select/ng-select";

import { DataSelectComponent } from './data-select/data-select.component';
import { GroupEmailSelectComponent } from './email/group-email-select/group-email-select.component';
import { AccountEmailSelectComponent } from './email/account-email-select/account-email-select.component';
import { TemplateEmailSelectComponent } from './email/template-email-select/template-email-select.component';

const Component = [
	DataSelectComponent,
	GroupEmailSelectComponent,
	AccountEmailSelectComponent,
	TemplateEmailSelectComponent
]

@NgModule ({
	imports : [
		CommonModule,
		CoreCommonModule,
		FormsModule,
		NgSelectModule,
	],
	declarations    : [
		Component
	],
	entryComponents : [
		Component
	],
	exports         : [
		Component
	]
})
export class SelectModule {
}
