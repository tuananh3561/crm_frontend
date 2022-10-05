import { Component, OnInit } from '@angular/core';
import { takeUntil } from "rxjs/operators";
import { CoreConfigService } from "../../../../@core/services/config.service";
import { Subject } from "rxjs";

@Component({
  selector: 'app-maintenance',
  templateUrl: './maintenance.component.html',
  styleUrls: ['./maintenance.component.scss']
})
export class MaintenanceComponent implements OnInit {
	
	public coreConfig: any;
	
	// Private
	private _unsubscribeAll: Subject<any>;
	
	/**
	 * Constructor
	 *
	 * @param {CoreConfigService} _coreConfigService
	 */
	constructor(private _coreConfigService: CoreConfigService) {
		this._unsubscribeAll = new Subject();
		
		// Configure the layout
		this._coreConfigService.config = {
			layout: {
				navbar: {
					hidden: true
				},
				footer: {
					hidden: true
				},
				menu: {
					hidden: true
				},
				customizer: false,
				enableLocalStorage: false
			}
		};
	}
	
	// Lifecycle Hooks
	// -----------------------------------------------------------------------------------------------------
	
	/**
	 * On init
	 */
	ngOnInit(): void {
		// Subscribe to config changes
		this._coreConfigService.config.pipe(takeUntil(this._unsubscribeAll)).subscribe(config => {
			this.coreConfig = config;
		});
	}
	
	/**
	 * On destroy
	 */
	ngOnDestroy(): void {
		// Unsubscribe from all subscriptions
		this._unsubscribeAll.next(true);
		this._unsubscribeAll.complete();
	}

}
