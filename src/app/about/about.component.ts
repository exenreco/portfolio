import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  styles: `
    .wrapper {
      margin: auto;
      display: flex;
      padding: .4em;
      flex: 0 0 auto;
      font-size: 1.25rem;
      line-height: 1.225rem;
      position: relative;
      border-radius: .4em;
      justify-items: center;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      width: calc(100% - 1.8em);
      max-width: calc(1440px - 1.8em);
      margin-bottom: 1em;
    }
    .wrapper .other {
      margin: auto;
      width: calc(100% - .4em);
    }
    .header-section {
      margin: auto;
      display: flex;
      flex: 0 0 auto;
      flex-direction: row;
      width: calc(100% - .4em);
    }
    .header-section .content,
    .header-section .image-container {
      margin: .5em;
    }

    .header-section .image-container {
      height: 100%;
      padding: .4em;
      display: flex;
      flex: 0 0 auto;
      overflow: hidden;
      align-items: center;
      justify-items: center;
      justify-content: center;
      width: calc(30% - .8em);
    }
    .header-section .image-container img {
      width: 90%;
      height: auto;
      border-radius: 100%;
      border-bottom-right-radius: 0;
      border: .2em solid var(--tertiary-color, orange);
    }
    .header-section .content {
      display: flex;
      flex: 0 0 auto;
      flex-direction: column;
      width: calc(100% - 32.5%);
    }

    /* Tablet style rules
    **************************************************************************/
    @media (max-width: 1080px) {
      .header-section { flex-direction: column; }
      .header-section .content { width: 95%; height: auto; }
      .header-section .image-container { width: 95%; height: auto; }
      .header-section .image-container img {border-bottom-right-radius: 100%;}
    }

    /* Mobile style rules
    **************************************************************************/
    @media (max-width: 800px) {
      .header-section { flex-direction: column; }
      .header-section .content { width: 95%; height: auto; }
      .header-section .image-container { width: 95%; height: auto; }
      .header-section .image-container img {border-bottom-right-radius: 100%;}
    }
  `,
  template: `
    <section class="page about">
      <h1 class="page-title">About</h1>
      <div class="wrapper">
        <div class="header-section">
          <div class="image-container"><img src="/assets/images/exenreco.png"></div>
          <section class="content">

            <p> Hello! I’m Exenreco Bell, a passionate Web Developer and
              Graphic Designer based in Omaha, Nebraska. With an Associate’s
              Degree in Information Technology (majoring in Web Development
              and minoring in Computer Programming) and a foundation in Mechanical
              & Electrical Engineering, I bring a unique blend of creativity,
              technical rigor, and problem-solving prowess to every project.
            </p>

            <section class="intro">
              <h2 class="heading">Unpacking My Technical Expertise</h2>
              <p>
                From crafting responsive interfaces in React, Backbone,
                and jQuery to developing custom themes and plugins in
                WordPress and PHP, I build web experiences that are both
                performant and user-focused. I’m comfortable architecting
                full-stack solutions—leveraging JavaScript, HTML/CSS, XML,
                and C++—and I thrive on debugging intricate challenges,
                optimizing workflows, and continually exploring new frameworks
                and tools.
              </p>
            </section>

            <section class="intro">
              <h2 class="heading">My Driving Philosophy</h2>
              <p>
                I believe that the best digital products emerge where design meets
                data and curiosity fuels innovation. Whether I’m fine-tuning a
                MySQL query, prototyping a 3D-printed tool in my home lab, or
                composing a client’s brand visuals, I approach each task with relentless
                attention to detail. Learning is at the heart of my work—every code
                review, technical ticket, and client conversation pushes me to expand
                my skill set and deliver solutions that exceed expectations.
              </p>
            </section>

          </section>
        </div>
        <section class="other">
          <h2 class="heading">Beyond the Screen</h2>
          <span>When I’m not coding, you’ll find me:</span>
          <ul class="list primary">
            <li>
              Building and experimenting in my home lab (network setups, Raspberry
              Pi projects, 3D-printed fixtures).
            </li>
            <li>
              Capturing moments and crafting digital art through photography and
              image manipulation.
            </li>
            <li>
              Collaborating as a Technical Engineer at FISERV, or freelancing on
              bespoke web and multimedia ventures (including roles with Care Builders
              at Home and Rhythmz Lounge).
            </li>
          </ul>
        </section>

        <section class="other">
          <h2 class="heading">Core Skills & Credentials</h2>
          <ul class="list primary">
            <li>
              <b>Languages & Frameworks:</b> JavaScript, React, Backbone, jQuery,
              PHP, C++, HTML5, CSS3, XML
            </li>
            <li>
              <b>Platforms & Tools:</b> WordPress, Git, npm, Webpack, REST APIs
            </li>
            <li>
              Certifications & Education:
              <ul class="list secondary">
                <li>
                  Bachelors in Information Technology (Web Development
                  & Computer Programming), Bellevue University Nebraska
                </li>
                <li>
                  Associate in Information Technology (Web Development
                  & Computer Programming), Metropolitan Community College Nebraska
                </li>
                <li>
                  CAPE & CXC Certificates in Information Technology, Engineering,
                  Mathematics, English (Caribbean Advanced Proficiency & Examination Councils)
                </li>
              </ul>
            </li>
            <li>
              <b>Soft Skills:</b> Agile collaboration, technical troubleshooting, creative
              problem-solving, client communication
            </li>
          </ul>
        </section>

        <section class="other">
          <h2 class="heading">Let’s Connect</h2>
          <span>Ready to bring your next web project to life? Reach out directly:</span>
          <ul class="list primary">
            <li class="item">Email: <a href="mailto:exenreco19@yahoo.com">Exenreco19&#64;yahoo.com</a></li>
            <li class="item">Phone: <a href="tel:+14025155928">+1(402)515-5928</a></li>
          </ul><br><br>
          <strong>I look forward to turning ideas into engaging, high-impact digital experiences!</strong>
        </section>
      </div>
    </section>
  `
})
export class AboutComponent {}
