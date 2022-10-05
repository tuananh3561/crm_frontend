import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountEmailService {
  
  constructor (private http: HttpClient) {
  }
  
  getAccountEmailByType (type: any): Observable<any> {
    const url  = environment.host_mail + 'get-account-email-by-type';
    let params = new HttpParams ();
    if (type != null) {
      params = params.append ('type', type.toString ());
    }
    return this.http.get<any> (url, {params : params});
  }
  
  getListAccountEmail (accountEmailSearchModel: AccountEmailSearchModel): Observable<any> {
    const url  = environment.host_mail + 'get-list-account-email';
    let params = new HttpParams ();
    if (accountEmailSearchModel.page) {
      params = params.append ('page', accountEmailSearchModel.page.toString ());
    }
    if (accountEmailSearchModel.limit) {
      params = params.append ('limit', accountEmailSearchModel.limit.toString ());
    }
    if (accountEmailSearchModel.type) {
      params = params.append ('type', accountEmailSearchModel.type);
    }
    if (accountEmailSearchModel.status || accountEmailSearchModel.status == '0') {
      params = params.append ('status', accountEmailSearchModel.status);
    }
    
    return this.http.get<any> (url, {params : params});
  }
  
  editAccountEmail (accountEmailModel: AccountEmailModel): Observable<any> {
    const url = environment.host_mail + 'edit-account-email';
    return this.http.post<any> (url, accountEmailModel);
  }
  
  updateStatusAccountEmail (id: number, status: number): Observable<any> {
    const url = environment.host_mail + 'update-status-account-email';
    return this.http.post<any> (url, {id : id, status : status});
  }
}
