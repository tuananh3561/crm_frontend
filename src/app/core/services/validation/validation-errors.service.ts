import { Injectable } from '@angular/core';
import { FormArray, FormGroup } from "@angular/forms";

@Injectable ({
	providedIn : 'root'
})
export class ValidationErrorsService {
	
	constructor () {
	}
	
	validationErrors (group: FormGroup, formErrors: any, validationMessages: any): void {
		Object.keys (group.controls).forEach ((key: string) => {
			const abstractControl = group.get (key);
			if (abstractControl instanceof FormGroup) {
				this.validationErrors (abstractControl, formErrors, validationMessages);
			} else if (abstractControl instanceof FormArray) {
				formErrors[key] = [];
				Object.keys (abstractControl.controls).forEach ((key2: string) => {
					const abstractControl2 = abstractControl.get (key2);
					if (abstractControl2 instanceof FormGroup) {
						formErrors[key][key2] = {};
						this.validationErrorsNotTouched (abstractControl2, formErrors[key][key2], validationMessages);
					} else {
						formErrors[key][key2] = '';
						if (abstractControl && !abstractControl.valid
							&& ( abstractControl.touched || abstractControl.dirty )) {
							const messages = validationMessages[key];
							for (const errorKey in abstractControl.errors) {
								if (errorKey && messages[errorKey]) {
									formErrors[key][key2] += messages[errorKey] + ' ';
								}
							}
						}
					}
				});
			} else {
				formErrors[key] = '';
				if (abstractControl && !abstractControl.valid
					&& ( abstractControl.touched || abstractControl.dirty )) {
					if (validationMessages[key]) {
						const messages = validationMessages[key];
						for (const errorKey in abstractControl.errors) {
							if (errorKey && messages[errorKey]) {
								formErrors[key] += messages[errorKey] + ' ';
							}
						}
					}
				}
			}
		});
	}
	
	validationErrorsNotTouched (group: FormGroup, formErrors: any, validationMessages: any): void {
		Object.keys (group.controls).forEach ((key: string) => {
			const abstractControl = group.get (key);
			
			if (abstractControl instanceof FormGroup) {
				this.validationErrorsNotTouched (abstractControl, formErrors, validationMessages);
			} else if (abstractControl instanceof FormArray) {
				formErrors[key] = [];
				Object.keys (abstractControl.controls).forEach ((key2: string) => {
					const abstractControl2 = abstractControl.get (key2);
					if (abstractControl2 instanceof FormGroup) {
						formErrors[key][key2] = {};
						this.validationErrorsNotTouched (abstractControl2, formErrors[key][key2], validationMessages);
					} else {
						formErrors[key][key2] = '';
						if (abstractControl2 && !abstractControl2.valid) {
							const messages = validationMessages[key];
							for (const errorKey in abstractControl2.errors) {
								if (errorKey && messages[errorKey]) {
									formErrors[key][key2] += messages[errorKey] + ' ';
								}
							}
						}
					}
				});
			} else {
				formErrors[key] = '';
				if (abstractControl && !abstractControl.valid) {
					if (validationMessages[key]) {
						const messages = validationMessages[key];
						for (const errorKey in abstractControl.errors) {
							if (errorKey && messages[errorKey]) {
								formErrors[key] += messages[errorKey] + ' ';
							}
						}
					}
				}
			}
		});
	}
}
