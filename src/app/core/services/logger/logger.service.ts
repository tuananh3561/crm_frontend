import { Injectable } from '@angular/core';

@Injectable ({
	providedIn : 'root'
})
export class LoggerService {
	
	constructor () {
	}
	
	log (msg: string) {
		console.warn (msg);
	}
	
	logError (msg: string) {
		console.error (msg);
	}
	
	logWarn (msg: string) {
		console.warn (msg);
	}
	
	logDebug (msg: string) {
		console.debug (msg);
	}
	
}
