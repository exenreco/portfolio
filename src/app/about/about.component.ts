import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink],
  styles: ``,
  template: `
    <section class="page-wrapper">
      <h1 class="page-title">About</h1>
      <div>
        <h2>About Me</h2>
        <p>
          Hello! I’m Exenreco Bell, a passionate Web Developer and
          Graphic Designer based in Omaha, Nebraska. With an Associate’s
          Degree in Information Technology (majoring in Web Development
          and minoring in Computer Programming) and a foundation in Mechanical
          & Electrical Engineering, I bring a unique blend of creativity,
          technical rigor, and problem-solving prowess to every project.
        </p>

        <h2>Unpacking My Technical Expertise</h2>
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

        <h2>My Driving Philosophy</h2>
        <p>
          I believe that the best digital products emerge where design meets
          data and curiosity fuels innovation. Whether I’m fine-tuning a
          MySQL query, prototyping a 3D-printed tool in my home lab, or
          composing a client’s brand visuals, I approach each task with relentless
          attention to detail. Learning is at the heart of my work—every code
          review, technical ticket, and client conversation pushes me to expand
          my skill set and deliver solutions that exceed expectations.
        </p>

        <h2>Beyond the Screen</h2>
        <p>When I’m not coding, you’ll find me:</p>
        <ul>
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


        <h2>Core Skills & Credentials</h2>
        <ul>
          <li>
            <b>Languages & Frameworks:</b> JavaScript, React, Backbone, jQuery,
            PHP, C++, HTML5, CSS3, XML
          </li>
          <li>
            <b>Platforms & Tools:</b> WordPress, Git, npm, Webpack, REST APIs
          </li>
          <li>
            Certifications & Education:
            <ul>
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

        <h2>Let’s Connect</h2>
        <p>Ready to bring your next web project to life? Reach out directly:</p>
        <ul>
          <li>+1 402-515-5928</li>
          <li>exenreco19&#64;yahoo.com</li>
        </ul>
        <p>I look forward to turning ideas into engaging, high-impact digital experiences!</p>
      </div>
    </section>
  `
})
export class AboutComponent {

}
