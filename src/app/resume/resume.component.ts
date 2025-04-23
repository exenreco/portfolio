import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  styles: `
    table, tr, th, td {
      border: 1px solid #333;
    }
    th {
      padding: 2em;
    }
  `,
  template: `
    <section class="page-wrapper">
      <h1 class="page-title">Resume</h1>
      <button>Download PDF</button>
      <table>
        <tr>
          <th>Photo</th>
          <th>Exenreco E. Bell</th>
        </tr>
      </table>
    </section>
  `
})
export class ResumeComponent {

}
