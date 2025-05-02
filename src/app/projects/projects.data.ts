import { Project } from "./project.interface";

export const PROJECTS: Project[] = [
  {
    slug:         'remodeling-a-portfolio',
    time:         new Date('05-2-2025'),
    title:        'Remodeling a portfolio with Angular',
    cover:        '/images/exenreco.png',
    gitRepo:      'https://github.com/exenreco/portfolio',
    aspectRatio:  20/18,
    excerpt:      'Creating a portfolio is more than just displaying work...',
    content:      `
      <section class="page remodeling">
        <article class="project">
          <section class="post-section">
            <p class="post-text">
              Creating a portfolio is more than just displaying work;
              it's about crafting an experience that reflects your skills,
              personality, and technical abilities. In this article,
              I’ll walk through the process of building my personal
              portfolio using Angular 18, highlighting the design choices,
              technologies used, and lessons learned.
            </p>
          </section>
          <section class="post-section">
            <h2 class="heading">Why Angular version 18?</h2>
            <p class="post-text">
              Angular 18 brings performance improvements, enhanced
              standalone APIs, and better tooling that are perfect for building a
              modern, modular, and scalable portfolio site. With Angular’s
              strong typing and structure, it helped me keep the project
              organized as it grew in complexity.
            </p>
          </section>
          <section class="post-section primary">
            <h2 class="heading">Key Features</h2>
          </section>
          <section class="post-section">
            <h3 class="title">Search Functionality</h3>
            <p class="post-text">
              I implemented a custom search model,
              service, and utility to allow visitors
              to quickly filter content. This component:
            </p>
            <ul class="list primary">
              <li>Uses RxJS observables for efficient, reactive data handling.</li>
              <li>Integrates a truncate utility for clean, readable summaries in the UI.</li>
              <li>Provides real-time filtering as users type.</li>
            </ul>
          </section>
          <section class="post-section">
            <h3 class="title">Google Maps Integration</h3>
            <p class="post-text">
              To give a professional touch and enhance credibility, I integrated the
              Google Maps API to show my location. The map:
            </p>
            <ul class="list primary">
              <li>Loads asynchronously to optimize performance.</li>
              <li>Uses a custom marker and info window for a branded look.</li>
            </lu>
          </section>
          <section class="post-section">
            <h3 class="title">Contact Form with Yahoo Mail Integration</h3>
            <p class="post-text">
              The contact form is fully functional and configured to work with Yahoo Mail:
            </p>
            <ul class="list primary">
              <li>Input validation ensures all fields are filled correctly.</li>
              <li>Submissions are handled securely and routed to my Yahoo inbox.</li>
            </lu>
          </section>
          <section class="post-section">
            <h3 class="title">Dynamic Projects Routing</h3>
            <p class="post-text">
              Each project I’ve worked on is accessible via a clean, descriptive
              URL like /projects/article-name. This routing strategy:
            </p>
            <ul class="list primary">
              <li>Uses Angular’s powerful router to dynamically load content.</li>
              <li>Improves SEO and user experience with semantic URLs.</li>
              <li>Allows for modular development by isolating project components.</li>
            </lu>
          </section>
          <section class="post-section">
            <h3 class="title">Resume & About Pages</h3>
            <p class="post-text">
              The Resume and About pages provide insight into my experience and background:
            </p>
            <ul class="list primary">
              <li>The Resume page features downloadable content and interactive design.</li>
              <li>The About page shares my journey and tech stack, helping visitors get to know me better.</li>
            </lu>
          </section>
          <section class="post-section">
            <h3 class="title">404 Handling</h3>
            <p class="post-text">
              No good site is complete without proper error handling. I included a custom
              404 page that:
            </p>
            <ul class="list primary">
              <li>Matches Angular’s wildcard route.</li>
              <li>Offers helpful navigation back to the homepage or site sections.</li>
            </lu>
          </section>
          <section class="post-section secondary">
            <h3 class="title">Challenges & Learnings</h3>
            <p class="post-text">
              Some challenges I tackled included:
            </p>
            <ul class="list primary">
              <li>Setting up email handling through Yahoo without a backend required a creative workarounds and along with a focus on client-side validation and user feedback.</li>
              <li>Maintaining fast load times even with Google Maps and project content was solved using lazy loading and efficient change detection strategies.</li>
            </lu>
            <p class="post-text">
              Building this project solidified my skills in Angular’s latest version,
              TypeScript best practices, and third-party API integration. It’s been both
              a personal and professional milestone, and I’m excited to continue expanding it.
            </p>
          </section>
          <section class="post-section tertiary">
            <h3 class="title">Final Thoughts</h3>
            <p class="post-text">
              This portfolio isn’t just a showcase but a living project
              that I continue to refine. It reflects how I approach development:
              with structure, clarity, and a focus on user experience. Feel free
              to explore the code, test the features, and get in touch via the contact form!
            </p>
          </section>
        </article>
      </section>
    `,
  },
  {
    slug:         'rhythmz-lounge-theme',
    time:         new Date('2024-02-15'),
    title:        'Rhythmz lounge WordPress Theme',
    cover:        '/images/exenreco-resume.png',
    gitRepo:      '',
    excerpt:      '',
    content:      '<h2>Features</h2><ul><li>Feature 1</li><li>Feature 2</li></ul>',
    aspectRatio:  10/12,
  },
  {
    slug:         'angular-app-3',
    time:         new Date('2024-02-15'),
    title:        'Angular Application',
    cover:        '/images/exenreco-resume.png',
    gitRepo:      '',
    excerpt:      'A modern web application built with Angular',
    content:      '<h2>Features</h2><ul><li>Feature 1</li><li>Feature 2</li></ul>',
    aspectRatio:  9/12,
  },
];
