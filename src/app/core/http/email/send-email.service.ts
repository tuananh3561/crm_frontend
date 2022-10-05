import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  
  
  constructor (private http: HttpClient) {
  }
  
  mailTo (sendEmailModel: SendEmailModel): Observable<any> {
    const url = environment.host_mail + 'mail-to';
    return this.http.post<any> (url, sendEmailModel);
  }
  
  smsTo (sendSmsModel: SendSmsModel): Observable<any> {
    const url = environment.host_mail + 'sms-to';
    return this.http.post<any> (url, sendSmsModel);
  }
  
  smsToData (sendSmsModel: SendSmsTranferModel): Observable<any> {
    const url = environment.host_mail + 'sms-to-data';
    return this.http.post<any> (url, sendSmsModel);
  }
  
  sendMailSaleLinkAgentAffi (mailToData: SendMailSaleLinkAgentAffiModel): Observable<any> {
    const url = environment.host_mail + 'mail-to-data';
    
    return this.http.post(url, mailToData);
  }
  
  sendEmailByFile (sendEmailByFileModel: SendEmailByFileModel): Observable<any> {
    const url = environment.host_mail + 'send-email-by-file';
    return this.http.post<any> (url, sendEmailByFileModel);
  }
  
  sendSmsByFile (sendSmsByFileModel: SendSmsByFileModel): Observable<any> {
    const url = environment.host_mail + 'send-sms-by-file';
    return this.http.post<any> (url, sendSmsByFileModel);
  }
}
