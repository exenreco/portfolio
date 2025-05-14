import { Component, ViewChild } from '@angular/core';
import { CommonModule, NgFor, NgIf, } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { Contact } from './contact.interface';
import { ContactService } from './contact.service';

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
      animation: shake 0.5s ease-in-out;
    }
    .ng-valid.ng-touched:not(form) {
      border-color: #28a745 !important;
    }
    .error-message {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
      padding-left: 0.25rem;
    }
    .required {
      color: #dc3545;
      margin-left: 0.25rem;
    }
    @keyframes shake {
      0%, 100% { transform: translateX(0); }
      25% { transform: translateX(-5px); }
      75% { transform: translateX(5px); }
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
              <input #fName="ngModel"
                type="text"
                name="fName"
                placeholder="John"
                [(ngModel)]="contactModel.fName"
                required
              >
              <div *ngIf="fName.invalid && (fName.touched || contactForm.submitted)" class="error-message">
                <span *ngIf="fName.errors?.['required']">First name is required</span>
              </div>
            </span>
            <span class="field">
              <label for="lName"><span class="required">*</span> Last Name:</label>
              <input #lName="ngModel"
                name="lName"
                type="text"
                placeholder="Doe"
                [(ngModel)]="contactModel.lName"
                required
              >
              <div *ngIf="lName.invalid && (lName.touched || contactForm.submitted)" class="error-message">
                <span *ngIf="lName.errors?.['required']">Last name is required</span>
              </div>
            </span>
          </div>

          <div class="row">
            <span class="field">
              <label for="email"><span class="required">*</span> Email:</label>
              <input #email="ngModel"
                type="email"
                name="email"
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                placeholder="example@mail.com"
                [(ngModel)]="contactModel.email"
                required
              >
              <div *ngIf="email.invalid && (email.touched || contactForm.submitted)" class="error-message">
                <span *ngIf="email.errors?.['required']">Email is required</span>
                <span *ngIf="email.errors?.['email']">Enter a valid email address</span>
              </div>
            </span>
            <span class="field">
              <label for="phone">Phone:</label>
              <input #phone="ngModel"
                type="tel"
                name="phone"
                placeholder="(000) 000-0000"
                [(ngModel)]="contactModel.phone"
                pattern="^(\\(\\d{3}\\)|\\d{3})[-.\\s]?\\d{3}[-.\\s]?\\d{4}$"
              >
              <div *ngIf="phone.invalid && (phone.touched || contactForm.submitted)" class="error-message">
                <span *ngIf="phone.errors?.['pattern']">Phone number must match format: (123) 456-7890</span>
              </div>
            </span>
          </div>

          <div class="row">
            <label for="employer" style="margin: auto; width: 100%; text-align: left;">
              <input #employer="ngModel"
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
              <input #subject="ngModel"
                name="subject"
                type="text"
                placeholder="Message Subject"
                [(ngModel)]="contactModel.subject"
                required
              >
              <div *ngIf="subject.invalid && (subject.touched || contactForm.submitted)" class="error-message">
                <span *ngIf="subject.errors?.['required']">Subject is required</span>
              </div>
            </span>
            <span class="field">
              <label for="message"><span class="required">*</span> Message</label>
              <textarea #message="ngModel"
                name="message"
                placeholder="Type your message here..."
                [(ngModel)]="contactModel.message"
                required
              ></textarea>
              <div *ngIf="message.invalid && (message.touched || contactForm.submitted)" class="error-message">
                <span *ngIf="message.errors?.['required']">Message is required</span>
              </div>
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

  contactModel: Contact = {
    fName:    '',
    lName:    '',
    email:    '',
    phone:    '',
    subject:  '',
    message:  '',
    employer: false
  };

  constructor(private contactService: ContactService) {}

  resetForm(form: NgForm): void {
    form.resetForm();
  }

  private handleResponse(form: NgForm): void {
    this.successMessage = 'Message sent successfully!';
    this.resetForm(form);
    this.loading = false;
  }

  private handleError(err: Error): void {
    this.errorMessage = err.message;
    this.loading = false;
  }

  sendMail(form: NgForm): void {
    this.loading = true;
    this.errorMessage = '';
    this.successMessage = '';

    this.contactService.sendEmail(this.contactModel)
      .subscribe({
        next: () => this.handleResponse(form),
        error: (err: Error) => this.handleError(err)
      });
  }

  onSubmit(form: NgForm): void {
  if (form.valid) this.sendMail(form);
  else {
    this.errorMessage = 'Please correct the highlighted errors';
    // Mark all fields as touched to show errors
    Object.values(form.controls).forEach(control => {
      control.markAsTouched();
    });
  }
}
}
