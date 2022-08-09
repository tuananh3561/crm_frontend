import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import { ErrorComponent } from './error/error.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';



@NgModule({
  declarations: [
    ComingSoonComponent,
    ErrorComponent,
    MaintenanceComponent,
    NotAuthorizedComponent
  ],
  imports: [
    CommonModule
  ]
})
export class MiscellaneousModule { }
