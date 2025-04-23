import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-notfound',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  styles: ``,
  template: `
    <section class="page-wrapper">
      <h1 class="page-title">404</h1>
       <section class="content">
        <div class="left">
          <p>
            <b>404.</b> That's an error.<br>
            The requested URL /"" was not found on this server.<br>
            <span style="color: grey;">That's all we know.</span>
          </p>
        </div>
        <div class="right"></div>
      </section>
    </section>
  `
})
export class NotfoundComponent {

}
