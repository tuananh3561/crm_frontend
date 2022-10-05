import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { AccountEmailComponent } from "./account-email/account-email.component";
import { EditAccountEmailComponent } from "./account-email/edit-account-email/edit-account-email.component";
import { GroupEmailComponent } from "./group-email/group-email.component";
import { EditGroupEmailComponent } from "./group-email/edit-group-email/edit-group-email.component";
import { TemplateEmailComponent } from "./template-email/template-email.component";
import { EditTemplateEmailComponent } from "./template-email/edit-template-email/edit-template-email.component";
import { LogEmailComponent } from "./log-email/log-email.component";
import { LogSmsComponent } from "./log-sms/log-sms.component";
import { CoreCommonModule } from "../../../../@core/common.module";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { ContentHeaderModule } from "../../../layout/components/content-header/content-header.module";
import { CardSnippetModule } from "../../../../@core/components/card-snippet/card-snippet.module";
import { CsvModule } from "@ctrl/ngx-csv";
import { NgxDatatableModule } from "@swimlane/ngx-datatable";
import { DatatablesService } from "../../../main/tables/datatables/datatables.service";
import { SelectModule } from "../../../shared/components/select/select.module";

// routing
const routes: Routes = [
	{
		path      : 'account-email',
		component : AccountEmailComponent,
		// resolve: {
		//   uls: AccountEmailComponent
		// },
		data : {animation : 'UserListComponent'}
	},
	{
		path      : 'group-email',
		component : GroupEmailComponent,
		// resolve: {
		//   data: GroupEmailComponent,
		// },
		data : {path : 'view/:id', animation : 'UserViewComponent'}
	},
	{
		path      : 'template-email',
		component : TemplateEmailComponent,
		data      : {animation : 'UserEditComponent'}
	},
	{
		path      : 'log-email',
		component : LogEmailComponent,
		data      : {animation : 'UserEditComponent'}
	},
	{
		path      : 'log-sms',
		component : LogSmsComponent,
		data      : {animation : 'UserEditComponent'}
	},
];

@NgModule ({
	imports : [
		CommonModule,
		RouterModule.forChild (routes),
		CoreCommonModule,
		FormsModule,
		TranslateModule,
		CoreCommonModule,
		ContentHeaderModule,
		CardSnippetModule,
		NgxDatatableModule,
		CsvModule,
		SelectModule
	],
	declarations : [
		AccountEmailComponent,
		EditAccountEmailComponent,
		GroupEmailComponent,
		EditGroupEmailComponent,
		TemplateEmailComponent,
		EditTemplateEmailComponent,
		LogEmailComponent,
		LogSmsComponent
	],
	providers: [DatatablesService]
})
export class EmailMangerModule {
}
