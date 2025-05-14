import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from './contact.interface';
import { env } from "../env/env";
import { LoadingService } from '../loading/loading.service';
import { finalize } from 'rxjs/operators';
import { EnvDevelopmentMailer, EnvProductionMailer } from '../env/mailer.env';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  /** Root URL for all project endpoints */
  private apiRoot: string;

  constructor(private http: HttpClient, private loadingService: LoadingService) {
    // Choose dev vs prod base URL at construction time
    this.apiRoot = env.production
      ? EnvProductionMailer.mailUrl
      : EnvDevelopmentMailer.mailUrl;
  }

  /**
   * Sends the contact payload to the backend mailing endpoint.
   * @param contact The data collected from the contact form.
   * @returns An Observable that completes on success or errors.
   */
  sendEmail(contact: Contact): Observable<any> {
    this.loadingService.show('Sending message...');
    return this.http.post<any>(`${this.apiRoot}/api/mail/send`, contact)
      .pipe(
        catchError(this.handleError),
        finalize(() => this.loadingService.hide())
      );
  }

  /**
   * Centralized error handler for HTTP operations.
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    let message: string;

    if (error.error instanceof ErrorEvent) {
      // Client-side or network error
      message = `Client error: ${error.error.message}`;
    } else if (error.status === 0) {
      // A network error occurred
      message = 'Connection error - please check your network';
    } else {
      // Backend returned an unsuccessful response code
      message = error.error?.message || `Server returned code ${error.status}`;
    }

    // You could log to remote monitoring here
    console.error('ContactService error:', message);
    return throwError(() => new Error(message));
  }
}
