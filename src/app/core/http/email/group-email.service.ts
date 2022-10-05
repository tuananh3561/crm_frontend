import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GroupEmailService {
  
  constructor (private http: HttpClient) {
  }
  
  getListGroupEmailName (status: any): Observable<any> {
    const url  = environment.host_mail + 'get-list-group-email-name';
    let params = new HttpParams ();
    if (status != null) {
      params = params.append ('status', status.toString ());
    }
    return this.http.get<any> (url, {params : params});
  }
  
  getListGroupEmail (groupEmailSearchModel: GroupEmailSearchModel): Observable<any> {
    const url  = environment.host_mail + 'get-list-group-email';
    
    let params = new HttpParams ();
    
    if (groupEmailSearchModel.page) {
      params = params.append ('page', groupEmailSearchModel.page.toString ());
    }
    if (groupEmailSearchModel.limit) {
      params = params.append ('limit', groupEmailSearchModel.limit.toString ());
    }
    if (groupEmailSearchModel.title) {
      params = params.append ('title', groupEmailSearchModel.title);
    }
    if (groupEmailSearchModel.status || groupEmailSearchModel.status == '0') {
      params = params.append ('status', groupEmailSearchModel.status);
    }
    
    return this.http.get<any> (url, {params : params});
  }
  
  editGroupEmail (groupEmailModel: GroupEmailModel): Observable<any> {
    const url = environment.host_mail + 'edit-group-email';
    return this.http.post<any> (url, groupEmailModel);
  }
  
  updateStatusGroupEmail (id: number, status: number): Observable<any> {
    const url = environment.host_mail + 'update-status-group-email';
    return this.http.post<any> (url, {id : id, status : status});
  }
}
