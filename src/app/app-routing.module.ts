import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path         : 'pages',
		loadChildren : () => import('./main/pages/pages.module').then (m => m.PagesModule)
	},
	{
		path       : '',
		redirectTo : '/home',
		pathMatch  : 'full'
	},
	{
		path       : '**',
		redirectTo : '/pages/miscellaneous/error' //Error 404 - Page not found
	}
];

@NgModule ({
	imports : [
		RouterModule.forRoot (routes, {
			scrollPositionRestoration : 'enabled', // Add options right here
			relativeLinkResolution    : 'legacy'
		})
	],
	exports : [RouterModule]
})
export class AppRoutingModule {
}
