import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TemplateEmailService {
  
  constructor (private http: HttpClient) {
  }
  
  getListGroupByType (countryCode: any = null): Observable<any> {
    const url  = environment.host_mail + 'get-list-group-by-type';
    let params = new HttpParams ();
    
    if (countryCode) {
      params = params.append ('country_code', countryCode);
    }
    return this.http.get<any> (url, {params : params});
  }
  
  getListTemplateName (templateEmailSearchModel: TemplateEmailSearchModel): Observable<any> {
    const url  = environment.host_mail + 'get-list-template-name';
    
    let params = new HttpParams ();
    
    if (templateEmailSearchModel.page) {
      params = params.append ('page', templateEmailSearchModel.page.toString ());
    }
    if (templateEmailSearchModel.limit) {
      params = params.append ('limit', templateEmailSearchModel.limit.toString ());
    }
    if (templateEmailSearchModel.title) {
      params = params.append ('title', templateEmailSearchModel.title);
    }
    if (templateEmailSearchModel.slug) {
      params = params.append ('slug', templateEmailSearchModel.slug);
    }
    if (templateEmailSearchModel.type) {
      params = params.append ('type', templateEmailSearchModel.type);
    }
    if (templateEmailSearchModel.group_email_id) {
      params = params.append ('group_email_id', templateEmailSearchModel.group_email_id);
    }
    if (templateEmailSearchModel.country_code) {
      params = params.append ('country_code', templateEmailSearchModel.country_code);
    }
    if (templateEmailSearchModel.status || templateEmailSearchModel.status == '0') {
      params = params.append ('status', templateEmailSearchModel.status);
    }
    
    return this.http.get<any> (url, {params : params});
  }
  
  getListTemplateEmail (templateEmailSearchModel: TemplateEmailSearchModel): Observable<any> {
    const url  = environment.host_mail + 'get-list-template-content';
    
    let params = new HttpParams ();
    
    if (templateEmailSearchModel.page) {
      params = params.append ('page', templateEmailSearchModel.page.toString ());
    }
    if (templateEmailSearchModel.limit) {
      params = params.append ('limit', templateEmailSearchModel.limit.toString ());
    }
    if (templateEmailSearchModel.title) {
      params = params.append ('title', templateEmailSearchModel.title);
    }
    if (templateEmailSearchModel.slug) {
      params = params.append ('slug', templateEmailSearchModel.slug);
    }
    if (templateEmailSearchModel.type) {
      params = params.append ('type', templateEmailSearchModel.type);
    }
    if (templateEmailSearchModel.group_email_id) {
      params = params.append ('group_email_id', templateEmailSearchModel.group_email_id);
    }
    if (templateEmailSearchModel.country_code) {
      params = params.append ('country_code', templateEmailSearchModel.country_code);
    }
    if (templateEmailSearchModel.status || templateEmailSearchModel.status == '0') {
      params = params.append ('status', templateEmailSearchModel.status);
    }
    
    return this.http.get<any> (url, {params : params});
  }
  
  getTemplateDetail (id): Observable<any> {
    const url  = environment.host_mail + 'get-template-detail?id=' + id;
    let params = new HttpParams ();
    if (id) {
      params = params.append ('id', id.toString ());
    }
    return this.http.get<any> (url, {params : params});
    
  }
  
  editTemplateEmail (templateEmail: TemplateEmailModel): Observable<any> {
    const url = environment.host_mail + 'edit-template-content';
    return this.http.post<any> (url, templateEmail);
  }
  
  updateStatus (id, status): Observable<any> {
    const url = environment.host_mail + 'update-status-template-content';
    return this.http.post (url, {id : id, status : status});
  }
  
  getHistoryUpdateTemplateById (id): Observable<any> {
    const url = environment.host_mail + 'get-history-edit-template-by-param';
    let params = new HttpParams ();
    if (id) {
      params = params.append ('id', id.toString ());
    }
    return this.http.get<any> (url, {params : params});
  }
  
  getGroupEmailIdBySlug (slug): Observable<any> {
    const url = environment.host_mail + 'get-group-emai-id-by-slug';
    let params = new HttpParams ();
    if (slug) {
      params = params.append ('slug', slug.toString ());
    }
    return this.http.get<any> (url, {params : params});
  }
}
