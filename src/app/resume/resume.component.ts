import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-resume',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  styles: `
    .grid.download {
      padding: .4em;
      border-radius: .5em;
      width: calc(95% - .8em);
      margin: 2em auto 2em auto;
      max-width: calc(1440px - .8em);
      color: var(--text-color, #fff);
      background: var(--primary-shade-color, #333);
    }
    .grid.download p,
    .grid.download span {
      margin: auto;
      display: flex;
      padding: .4em;
      flex:  0 0 auto;
      align-items: center;
      justify-items: center;
      justify-content: center;
      width: calc(45% - .8em);
    }
    .grid.download p{
      align-items: center;
      justify-items: left;
      justify-content: left;
    }
    .grid.download span {
      align-items: center;
      justify-items: right;
      justify-content: right;
    }

    .grid {
      margin: auto;
      padding: .4em;
      margin-bottom: 2em;
      width: calc(100% - .8em);
      max-width: calc(1440px - .8em);
    }
    .grid section {
      width: 95%;
      margin: .4em auto .4em auto;
    }
    .grid .row .column.gutter {
      padding: .4em;
      width: calc(30% - .8em);
      color: var(--text-color, #fff);
      background: var(--primary-shade-color, #333);
    }
    .grid .row .column.content {
      padding: .4em;
      width: calc(100% - 31.8%);
    }
    .grid .row .column.gutter a,
    .grid .row .column.gutter a:link,
    .grid .row .column.gutter a:active,
    .grid .row .column.gutter a:visited {
      color: var(--tertiary-color, #fff);
      text-decoration: none;
      transition: color 0.2s ease;
    }
    .grid .row .column.gutter a:hover {
      color: var(--text-color, #333);
    }

    .resume-image {
      width: 90%;
      margin: auto;
      height: auto;
      display: block;
    }

    .section.header-text h2 {
      text-align: left;
      font-size: 4.825rem;
      font-weight: normal;
      color: var(--primary-shade-color, #000);
    }
    .section.header-text h2 b {
      width: 95%;
      font-weight: bolder;
    }
    .section.header-text span {
      width: 95%;
      margin: auto;
      display: block;
      font-size: 1.225rem;
    }

    table, tr, td, th {
      margin: auto;
      width: calc( 100% - .8em);
      border: .08em solid var(--primary-shade-color, #333);
    }
    th {
      padding: .4em;
      text-align: left;
      font-weight: bold;
    }
    td { padding: .4em; }

    @media (max-width: 800px) {
      .grid.download {
        width: calc(90% - .8em);
        flex-direction: column-reverse;
      }
      .grid.download .row {
        flex-direction: column;
      }
      .grid.download p,
      .grid.download span {
        justify-items: left;
        justify-content: left;
        width: calc(100% - .8em);
      }
      .grid.download span {
        justify-items: right;
        justify-content: right;
      }

      .grid .row {
        margin: auto;
        width: calc( 100% - .8em);
        flex-direction: column-reverse;
      }
      .grid .row .column.gutter {
        padding: .4em;
        margin: auto;
        width: calc(98% - .8em);
        color: var(--text-color, #fff);
        background: var(--primary-shade-color, #333);
      }
      .grid .row .column.content {
        padding: .4em;
        width: calc(100% - .8em);
      }
    }
  `,
  template: `
    <section class="page contact">
      <h1 class="page-title">Resume</h1>

      <div class="grid download">
        <div class="row">
          <p>Download a digital copy of this resume by clicking the link.</p>
          <span>
            <a
              type="button"
              class="btn secondary"
              download="/assets/doc/resume-exenreco.pdf"
              href="/doc/resume-v-04.18.2024.pdf"
            ><i class="fa-solid fa-file-pdf"></i> Resume Download</a>
          </span>
        </div>
      </div>

      <div class="grid">
        <div class="row">
          <div class="column gutter">

            <section class="section image">
              <h2 class="heading" style="display: none; visibility: hidden;">portfolio image</h2>
              <img class="resume-image" src="assets/images/exenreco-resume.png">
            </section>

            <section class="section summary">
              <h2 class="heading">Summary</h2>
              <p>
                Web developer with an Information Technology degree and a background
                in Mechanical & Electrical Engineering. A versatile, problem solving
                professional who excels in diverse fields. Quick learner with a passion
                for taking on new challenges.
              </p>
            </section>

            <section class="section get-in-touch">
              <h2 class="heading">Getting in touch</h2>
              <div class="grid">
                <div class="row">
                  <span><i class="fa-solid fa-phone"></i></span>
                  <span><strong>Phone: </strong><a href="tel:402-515-5928">+1 402-515-5928</a></span>
                </div>
                <div class="row">
                  <span><i class="fa-solid fa-envelope"></i></span>
                  <span><strong>Email: </strong><a href="mailto:exenreco19@yahoo.com">exenreco19&#64;yahoo.com</a></span>
                </div>
              </div>
            </section>

            <section class="section portfolio">
              <h2 class="heading">Portfolio</h2>
              <p>Explore my portfolio: <a target="_blank" href="https://www.exenreco.com">https://www.exenreco.com</a></p>
            </section>

            <section class="section skills">
              <h2 class="heading">Skills</h2>
              <div class="grid">
                <div class="row">
                  <div style="width: 30%;"><i class="fa-brands fa-html5"></i> HTML</div>
                  <div style="width: 30%;"><i class="fa-brands fa-css3-alt"></i> CSS</div>
                </div>
                <div class="row">
                  <div style="width: 30%;"><i class="fa-brands fa-angular"></i> Angular</div>
                  <div style="width: 30%;"><i class="fa-brands fa-js"></i> TypeScript</div>
                </div>
                <div class="row">
                  <div style="width: 30%;"><i class="fa-brands fa-js"></i> jQuery</div>
                  <div style="width: 30%;"><i class="fa-brands fa-node-js"></i> NodeJs</div>
                </div>
                <div class="row">
                  <div style="width: 30%;"><i class="fa-brands fa-js"></i> BackboneJs</div>
                  <div style="width: 30%;"><i class="fa-brands fa-js"></i> ThreeJs</div>
                </div>
                <div class="row">
                  <div style="width: 30%;"><i class="fa-brands fa-js"></i> JavaScript</div>
                  <div style="width: 30%;"><i class="fa-brands fa-wordpress"></i> WordPress</div>
                </div>
                <div class="row">
                  <div style="width: 30%;"><i class="fa-solid fa-code"></i> C#</div>
                  <div style="width: 30%;"><i class="fa-brands fa-php"></i> PHP</div>
                </div>
              </div>
            </section>

            <section class="section skills">
              <h2 class="heading">REFERENCES</h2>
              <div class="grid">
                <div class="row">
                  <span>Rupert Pottinger</span>
                  <span><a href="tel:402-321-5257">+1 402-321-5257</a></span>
                </div>
                <div class="row">
                  <span>Se Chu Lah</span>
                  <span><a href="tel:531-495-9644">+1 531-495-9644</a></span>
                </div>
              </div>
            </section>

            <section class="section info">
              <p>
                A more fleshed out version of my resume can be found at:
                <a target="_blank" href="https://www.exenreco.com">https://www.exenreco.com</a>
              </p>
            </section>

          </div>
          <div class="column content">

            <section class="section header-text">
              <h2><b>Exenreco</b> Bell</h2>
              <span>Web Developer | Graphic Designer | Technician</span>
            </section>

            <section class="section education">
              <h2 class="heading">Education</h2>
              <table>
                <tr><th>Time/Country</th><th>Institution</th><th>Course</th></tr>
                <tr>
                  <td><strong>2024-2025</strong> [US]</td>
                  <td>Bellevue University<br><strong>Nebraska</strong></td>
                  <td>
                    Bachelor's Degree in <strong>(Information Technology)</strong>
                    <ul class="list primary">
                      <li><strong>Major</strong> - Web Development</li>
                      <li><strong>Minor</strong> - Computer Programming</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>2014-2016</strong> [US]</td>
                  <td>Metropolitan Community College<br><strong>Nebraska</strong></td>
                  <td>
                    Associates Degree in <strong>(Information Technology)</strong>
                    <ul class="list primary">
                      <li><strong>Major</strong> - Web Development</li>
                      <li><strong>Minor</strong> - Computer Programming</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td><strong>2012-2013</strong> [US]</td>
                  <td>Caribbean Advanced Proficiency <br>Examination (CAPE)<br><strong>Jamaica</strong></td>
                  <td>
                    <strong>CAPE Certified in:</strong>
                    <table>
                      <tr>
                        <th>Course</th>
                        <th style="text-align: center;">Level</th>
                        <th style="text-align: center;">Score</th>
                      </tr>
                      <tr>
                        <td>English Language</td>
                        <td style="text-align: center;">2</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Information Technology</td>
                        <td style="text-align: center;">2</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Mathematics</td>
                        <td style="text-align: center;">2</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Mechanical Engineering</td>
                        <td style="text-align: center;">2</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>English Language</td>
                        <td style="text-align: center;">1</td>
                        <td style="text-align: center;">3</td>
                      </tr>
                      <tr>
                        <td>Information Technology</td>
                        <td style="text-align: center;">1</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Mathematics</td>
                        <td style="text-align: center;">1</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Mechanical Engineering</td>
                        <td style="text-align: center;">1</td>
                        <td style="text-align: center;">1</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td><strong>2012-2013</strong> [US]</td>
                  <td>Caribbean Examination Council (CXC)<br><strong>Jamaica</strong></td>
                  <td>
                    <strong>CXC Certified in:</strong>
                    <table>
                      <tr>
                        <th>Course</th>
                        <th style="text-align: center;">Score</th>
                      </tr>
                      <tr>
                        <td>Chemistry</td>
                        <td style="text-align: center;">3</td>
                      </tr>
                      <tr>
                        <td>Electrical Engineering</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>English Language</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Information Technology</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Mathematics</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Physics</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Social Studies</td>
                        <td style="text-align: center;">2</td>
                      </tr>
                      <tr>
                        <td>Technical Drawing</td>
                        <td style="text-align: center;">1</td>
                      </tr>
                      <tr>
                        <td>Visual Arts</td>
                        <td style="text-align: center;">1</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td><strong>2009-2011</strong> [US]</td>
                  <td>Heart Trust (NTCVET)<br><strong>Jamaica</strong></td>
                  <td>
                    <strong>NTCVET Certified in:</strong>
                    <table>
                      <tr>
                        <th>Course</th>
                        <th style="text-align: center;">levels</th>
                        <th style="text-align: center;">Score</th>
                      </tr>
                      <tr>
                        <td>Auto Mechanics</td>
                        <td style="text-align: center;">1-10</td>
                        <td style="text-align: center;">Completed</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </section>

            <section class="section experience">
              <h2 class="heading">Experience</h2>
              <table>
                <tr>
                  <th>Time/Country</th>
                  <th>Institution</th>
                  <th>Occupation</th>
                </tr>
                <tr>
                  <td><strong>10/30/23 - present</strong></td>
                  <td>FISERV</td>
                  <td>Technical Engineer</td>
                </tr>
                <tr>
                  <td><strong>12/22 - present</strong></td>
                  <td>Freelancer</td>
                  <td>Developer</td>
                </tr>
                <tr>
                  <td><strong>12/22- 06/22</strong></td>
                  <td>Oriental Trading Company</td>
                  <td>Truck Loader</td>
                </tr>
                <tr>
                  <td><strong>12/20 - 06/2022</strong></td>
                  <td>Rhythmz Lounge (Bar/Bistro)</td>
                  <td>Maintenance, Technician.</td>
                </tr>
              </table>
            </section>

            <section class="section hobbies">
              <h2 class="heading">Hobbies</h2>
              <table>
                <tr>
                  <th style="width: 35%;">Activity</th>
                  <th>Details</th>
                </tr>
                <tr>
                  <td><strong>Home Lab</strong></td>
                  <td>
                    Build maintain and service my home network and services using
                    4 Dell servers and 2 storage arrays. The network is configured
                    in a three tire architecture; see my portfolio for more info.
                  </td>
                </tr>
                <tr>
                  <td><strong>3D Crafting/Printing </strong></td>
                  <td>Create parts and tools around my home and home lab.</td>
                </tr>
              </table>
            </section>

          </div>
        </div>
      </div>
    </section>
  `
})
export class ResumeComponent {

}
