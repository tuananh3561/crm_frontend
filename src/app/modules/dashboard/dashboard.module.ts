import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';

// routing
const routes: Routes = [
  {
    path      : 'dashboard',
    loadComponent : () => import('./dashboard/dashboard.component').then( c => c.DashboardComponent)
  },
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild (routes),
  ]
})
export class DashboardModule { }
