import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component ({
	selector    : 'app-data-select',
	templateUrl : './data-select.component.html',
	styleUrls   : ['./data-select.component.scss']
})
export class DataSelectComponent implements OnInit {
	
	@Input () parentForm: FormControl = new FormControl ();
	@Input () bindLabel: string       = 'name';
	@Input () bindValue: string       = 'id';
	@Input () multiple: boolean       = false;
	@Input () clearable: boolean      = true;
	@Input () placeholder: string     = 'Data';
	
	@Input () listData: any = [];
	
	@Output () onChange = new EventEmitter ();
	
	constructor () {
	}
	
	ngOnInit (): void {
	}
	
	change (event) {
		this.onChange.emit (event)
	}
}
