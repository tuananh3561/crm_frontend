import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'environments/environment';
import { User, Role } from 'app/auth/models';
import { ToastrService } from 'ngx-toastr';

@Injectable ({providedIn : 'root'})
export class AuthenticationService {
	//public
	public currentUser: Observable<User>;
	
	//private
	private currentUserSubject: BehaviorSubject<User>;
	
	/**
	 *
	 * @param {HttpClient} _http
	 * @param {ToastrService} _toastrService
	 */
	constructor (private _http: HttpClient, private _toastrService: ToastrService) {
		this.currentUserSubject = new BehaviorSubject<User> (JSON.parse (localStorage.getItem ('currentUser')));
		this.currentUser        = this.currentUserSubject.asObservable ();
	}
	
	// getter: currentUserValue
	public get currentUserValue (): User {
		return this.currentUserSubject.value;
	}
	
	/**
	 *  Confirms if user is admin
	 */
	get isAdmin () {
		return this.currentUser && this.currentUserSubject.value.role === Role.Admin;
	}
	
	/**
	 *  Confirms if user is client
	 */
	get isClient () {
		return this.currentUser && this.currentUserSubject.value.role === Role.Client;
	}
	
	/**
	 * User login
	 *
	 * @param email
	 * @param password
	 * @returns user
	 */
	login (email: string, password: string) {
		const url = environment.host_auth + 'v2/auth/login';
		return this._http
			.post<any> (url, {email, password})
			.pipe (
				map (res => {
					// login successful if there's a jwt token in the response
					if (res.status === 'success') {
						this.logInData (res.data);
					}
					return res;
				})
			);
	}
	
	logInData (data) {
		let access_token = data.access_token;
		let user         = data.users;
		
		localStorage.setItem ('access_token', JSON.stringify (access_token));
		localStorage.setItem ('currentUser', JSON.stringify (user));
		
		// Display welcome toast!
		setTimeout (() => {
			this._toastrService.success (
				'You have successfully logged in as an ' +
				user.role +
				' user to Vuexy. Now you can start to explore. Enjoy! 🎉',
				'👋 Welcome, ' + user.firstName + '!',
				{toastClass : 'toast ngx-toastr', closeButton : true}
			);
		}, 2500);
		
		// notify
		this.currentUserSubject.next (user);
	}
	
	/**
	 * User logout
	 *
	 */
	logout () {
		// remove user from local storage to log user out
		localStorage.removeItem ('currentUser');
		// notify
		this.currentUserSubject.next (null);
	}
}
