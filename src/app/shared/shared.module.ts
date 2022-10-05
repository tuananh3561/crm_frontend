import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectModule } from "./components/select/select.module";
import { SearchModule } from "./components/search/search.module";
import { DialogModule } from "./components/dialog/dialog.module";
import { FormModule } from "./components/form/form.module";



@NgModule({
  imports: [
    CommonModule,
    DialogModule,
    FormModule,
    SelectModule,
    SearchModule
  ],
  declarations: [],
})
export class SharedModule { }
