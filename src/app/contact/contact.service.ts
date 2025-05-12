import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Contact } from './contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  /**
   * API endpoint for sending contact form data.
   * Adjust the path or use environment configuration as needed.
   */
  private readonly apiUrl = '/api/mail/send';

  constructor(private http: HttpClient) {}

  /**
   * Sends the contact payload to the backend mailing endpoint.
   * @param contact The data collected from the contact form.
   * @returns An Observable that completes on success or errors.
   */
  sendEmail(contact: Contact): Observable<any> {
    return this.http.post<any>(this.apiUrl, contact)
      .pipe(
        catchError(this.handleError)
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
