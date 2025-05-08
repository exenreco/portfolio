import { Component, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgIf, } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { HttpClient, provideHttpClient, HttpErrorResponse } from '@angular/common/http';
import { Contact } from './contact.interface';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf, FormsModule, RouterLink, RouterModule],
  styles: `
    .info {
      margin: auto;
      padding: .4em;
      margin-bottom: 1.2em;
      width: calc(100% - 1.8em);
      max-width: calc(1440px - 1.8em);
    }
    .info .contact-list {
      margin-top: 1.2em;
      margin-bottom: 1.2em;
    }
    .info .sep {
      color:  #555;
      display: block;
      text-align: center;
    }
    .contact-form {
      margin: auto;
      display: flex;
      padding: .4em;
      flex: 0 0 auto;
      padding-top: 1.4em;
      position: relative;
      border-radius: .4em;
      justify-items: center;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: calc(100% - 1.8em);
      max-width: calc(1440px - 1.8em);
      border: .2em solid rgba(0, 0, 0, .15);
    }
    .contact-form .required {
      color: red !important;
    }
    .contact-form fieldset {
      margin: auto;
      padding: .4em;
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      flex-direction: column;
      justify-items: center;
      justify-content: center;
      width: calc(100% - .8em);
    }
    .contact-form legend {
      top: -1em;
      left: 1em;
      height: 2em;
      display: flex;
      flex: 0 0 auto;
      position: absolute;
      align-items: center;
      font-weight: bolder;
      font-size: 1.225rem;
      justify-items: center;
      justify-content: center;
      padding: 0 1.2em 0 1.2em;
      background: var(--accent-color-tertiary, #fff);
    }
    .contact-form fieldset .row,
    .contact-form fieldset .column {
      margin: auto;
      display: flex;
      padding: .4em;
      flex: 0 0 auto;
      position: relative;
      margin: .2em .1em .2em .1em;
      width: calc(100% - 1.6em);
    }
    .contact-form .row {
      flex-direction: row;
    }
    .contact-form .column {
      flex-direction: column;
    }
    .contact-form .field {
      display: flex;
      flex: 0 0 auto;
      flex-direction: column;
    }
    .contact-form .row .field {
      margin: .2em;
      width: calc(50% - .4em);
    }
    .contact-form .column .field {
      margin: .2em;
      width: calc(100% - .4em);
    }
    .contact-form .row,
    .contact-form .column {
      margin: auto;
      padding: .4em;
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      justify-items: center;
      justify-content: center;
      width: calc(100% - .8em);
    }
    .contact-form .row:has(.employer) label {
      display: flex;
      flex: 0 0 auto;
      align-items: center;
      justify-items: left;
      justify-content: left;
    }
    .contact-form input,
    .contact-form textarea {
      height: 2.8em;
      border: none;
      font: inherit;
      padding: 0 0 0 0;
      text-indent: .2em;
      border-radius: .4em;
      box-sizing: border-box;
      border: .2em solid rgba(0, 0, 0, .15);
    }
    .contact-form textarea {
      height: 14em;
    }
    .ng-invalid.ng-touched:not(form) {
      border-color: #dc3545 !important;
    }

    .ng-valid.ng-touched:not(form) {
      border-color: #28a745 !important;
    }
  `,
  template: `
    <section class="page contact">
      <h2 class="page-title">Contact</h2>

      <section class="info">
        <h3 class="title">Getting in touch</h3>
        <p>
          Thanks for considering me; to reach out via email or phone at:
        </p>
        <ul class="contact-list list primary">
          <li class="item">Email: <a href="mailto:exenreco19@yahoo.com">Exenreco19&#64;yahoo.com</a></li>
          <li class="item">Phone: <a href="tel:+14025155928">+1(402)515-5928</a></li>
        </ul>
        <span class="sep">
          <i class="fa-solid fa-minus"></i>
          OR
          <i class="fa-solid fa-minus"></i>
        </span>
        <p>Complete the form below:</p>
      </section>

      <form class="contact-form" (ngSubmit)="onSubmit(contactForm)" #contactForm="ngForm" autocomplete="true">
        <fieldset>

          <legend>Message:</legend>

          <div class="row">
            <p style="margin: auto; width: 100%; text-align: left;">Share a little about yourself...</p>
          </div>

          <div class="row">
            <span class="field">
              <label for="fName"><span class="required">*</span> First Name:</label>
              <input #fName
                type="text"
                name="fName"
                placeholder="John"
                [(ngModel)]="contactModel.fName"
                required
              >
            </span>
            <span class="field">
              <label for="lName"><span class="required">*</span> Last Name:</label>
              <input #lName
                name="lName"
                type="text"
                placeholder="Doe"
                [(ngModel)]="contactModel.lName"
                required
              >
            </span>
          </div>

          <div class="row">
            <span class="field">
              <label for="email"><span class="required">*</span> Email:</label>
              <input #email
                type="email"
                name="email"
                placeholder="example@mail.com"
                [(ngModel)]="contactModel.email"
                required
              >
            </span>
            <span class="field">
              <label for="phone">Phone:</label>
              <input #phone
                type="tel"
                name="phone"
                placeholder="(000) 000-0000"
                [(ngModel)]="contactModel.phone"
                pattern="^(\\(\\d{3}\\)|\\d{3})[-.\\s]?\\d{3}[-.\\s]?\\d{4}$"
              >
            </span>
          </div>

          <div class="row">
            <label for="employer" style="margin: auto; width: 100%; text-align: left;">
              <input #employer
                name="employer"
                type="checkbox"
                class="employer"
                [(ngModel)]="contactModel.employer"
              > Are you trying to Employer?
            </label>
          </div>

          <div class="column">
            <span class="field">
              <label for="subject"><span class="required">*</span> Subject</label>
              <input #subject
                name="subject"
                type="text"
                placeholder="Message Subject"
                [(ngModel)]="contactModel.subject"
                required
              >
            </span>
            <span class="field">
              <label for="message"><span class="required">*</span> Message</label>
              <textarea #message
                name="message"
                placeholder="Type your message here..."
                [(ngModel)]="contactModel.message"
                required
              ></textarea>
            </span>
          </div>

        </fieldset>
        <div class="column">
            <p class="success" *ngIf="successMessage">{{ successMessage }}</p>
            <p class="error" *ngIf="errorMessage">
              {{ errorMessage }}
              <span *ngIf="contactForm.submitted && contactForm.invalid">
                Please check highlighted fields
              </span>
            </p>
            <p *ngIf="loading">Sending message...</p>
        </div>
        <div class="row">
          <button #send type="submit" class="btn primary" style="margin: auto;" [disabled]="!contactForm.valid">
            Send <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
      </form>
    </section>
  `
})
export class ContactComponent {
  @ViewChild('contactForm') contactForm!: NgForm;


  loading = false;

  errorMessage = '';

  successMessage = '';

  // Initialize characterModel
  contactModel: Contact = {
    fName:    '',
    lName:    '',
    email:    '',
    phone:    '',
    subject:  '',
    message:  '',
    employer: false
  };

  constructor(private http: HttpClient) {}

  // get mailing server url
  /*getApiBaseUrl(): Observable<string> {
    return this.http.get<{ apiBase: string }>('/config.json').pipe(
      map(config => config.apiBase)
    );
  }*/

  resetForm(form: NgForm) : void {
    form.resetForm();
  }

  sendMail(form: NgForm): void {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.http.post<Contact>('/api/send-email', this.contactModel)
      .subscribe({
        next: (res) => {
          this.successMessage = 'Message sent successfully!';
          this.resetForm(form);
          this.loading = false;
        },
        error: (err: HttpErrorResponse) => {
          this.errorMessage = this.parseError(err);
          this.loading = false;
        }
      });
  }

  private parseError(error: HttpErrorResponse): string {
    if (error.error instanceof ErrorEvent) {
      return `Client error: ${error.error.message}`;
    }
    if (error.status === 0) {
      return 'Connection error - check network';
    }
    return error.error?.message || error.message || 'Unknown server error';
  }

  onSubmit(form: NgForm) {
    if (form.valid) this.sendMail(form);
    else this.errorMessage = 'Please fill in all required fields correctly';
  }
}
