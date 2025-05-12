const PROJECTS = [
  {
    id:           1,
    slug:         'rhythmz-theme',
    time:         new Date('05-03-2025'),
    title:        'Rhythmz Theme Development',
    cover:        '/assets/images/project-rhythmz.png',
    gitRepo:      '',
    aspectRatio:  12/9,
    excerpt:      `Designing for nightlife is all about energy, motion, and bold expression, which is exactly what I set out to capture with Rhythmz Theme, a custom WordPress theme built from the ground up for nightclubs, DJs, live venues, and entertainment brands. This article explores the creative process, technical details, and standout features of Rhythmz Theme.`,
    content:      `
       <section class="page remodeling">
        <article class="project">

          <section class="post-section">
            <p class="post-text">
              Designing for nightlife is all about energy, motion, and bold
              expression, which is exactly what I set out to capture with
              Rhythmz Theme, a custom WordPress theme built from the ground
              up for nightclubs, DJs, live venues, and entertainment brands.
              This article explores the creative process, technical details,
              and standout features of Rhythmz Theme.
            </p>
          </section>

          <section class="post-section">
            <h2 class="heading">Vision & Purpose</h2>
            <p class="post-text">
              The Rhythmz Theme was designed to bring the pulse of nightlife to the web.
              Many WordPress themes claim versatility, but few are crafted
              specifically with club culture in mind. I wanted to change that by
              building something visually engaging, performance-optimized,
              and easy for event organizers to manage.
            </p>
          </section>

          <section class="post-section">
            <h3 class="title">Built with the Classics</h3>
            <p class="post-text">
              While some modern themes lean heavily on visual builders or frameworks, Rhythmz
              sticks to classic WordPress development principles:
            </p>
            <ul class="list primary">
              <li>PHP templates, custom functions.php, and clean theme structure.</li>
              <li>Fully compatible with WordPress's native block editor while supporting legacy shortcode usage.</li>
              <li>Built for performance and accessibility—without bloated dependencies.</li>
            </ul>
          </section>

          <section class="post-section primary">
            <h3 class="title">Integrated Libraries & Tools</h3>
            <p class="post-text">To enhance interactivity and visual appeal, Rhythmz includes some powerful front-end libraries:</p>
          </section>

          <section class="post-section">
            <h3 class="title">Font Awesome</h3>
            <p>
              Used to add instantly recognizable icons for navigation, events, social
              links, and more. Icons help establish an intuitive, modern UI across the theme.
            </p>
          </section>

          <section class="post-section">
            <h3 class="title">jQuery</h3>
            <p>
              Query powers dynamic UI behavior, from toggling menus to custom animation
              effects. Its mature ecosystem and WordPress compatibility make it an ideal
              choice for fast development.
            </p>
          </section>

          <section class="post-section">
            <h3 class="title">SwiperJS</h3>
            <p>
              The hero sliders and image carousels are powered by SwiperJS, a touch-friendly
                and responsive slider library. It’s perfect for showcasing:
            </p>
            <ul class="list primary">
              <li>Upcoming events</li>
              <li>Photo galleries</li>
              <li>DJ or artist lineups</li>
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">Custom JavaScript Architecture</h3>
            <p class="post-text">Instead of writing scattered scripts, I took a modular approach:</p>
            <ul class="list primary">
              <li>Built a custom JavaScript class system to manage UI components like sliders, modals, and nav menus.</li>
              <li>Implemented ES6 modules to keep the codebase maintainable and scalable.</li>
              <li>Each feature (e.g., menu toggle, lightbox gallery, schedule accordion) is encapsulated in its own module for clarity and reuse.</li>
            </ul>
            <p>
              This structure not only helps with debugging and expansion but also future proof
              the theme for more advanced integrations, like AJAX event loading or Spotify API support.
            </p>
          </section>

          <section class="post-section">
            <h3 class="title">Core Features</h3>
            <ul class="list primary">
              <li>Customizer Ready: Easily tweak brand colors, typography, and layout options.</li>
              <li>Event Listings: Custom post types and templates for promoting events with date/time/location metadata.</li>
              <li>Responsive & Retina-Ready: Designed to look sharp on mobile devices and high-DPI displays.</li>
              <li>SEO Friendly: Built with semantic HTML5 and clean code for improved visibility.</li>
              <li>Dark Mode Aesthetic: Default color palette tailored to the nightlife atmosphere, the theme is bold contrasts, neon accents, and immersive visuals.</li>
            </ul>
          </section>

          <section class="post-section secondary">
            <h3 class="title">What I Learned</h3>
            <p class="post-text">Developing Rhythmz refined my skills in:</p>
            <ul class="list primary">
              <li>Modular JavaScript and plugin-free interactivity.</li>
              <li>WordPress theming best practices.</li>
              <li>Balancing visual creativity with performance and usability.</li>
            </ul>
            <p>
              It was a fun challenge to capture the essence of a nightclub in a digital theme that’s
              both expressive and practical.
            </p>
          </section>

          <section class="post-section tertiary">
            <h3 class="title">Final Thoughts</h3>
            <p class="post-text">
              Rhythmz Theme isn’t just a product, but a platform for nightlife brands to shine online.
              Whether it’s a live DJ set or a week-long festival, the theme brings events to life with
              energy and style.
            </p>
          </section>

        </article>
      </section>
    `,
  },
  {
    id:           2,
    slug:         'remodeling-a-portfolio',
    time:         new Date('05-2-2025'),
    title:        'Portfolio Remodeling',
    cover:        '/assets/images/project-portfolio-cover.png',
    gitRepo:      'https://github.com/exenreco/portfolio',
    aspectRatio:  9/12,
    excerpt:      `Creating a portfolio is more than just displaying work; it's about crafting an experience that reflects your skills, personality, and technical abilities. In this article, I’ll walk through the process of building my personal portfolio using Angular 18, highlighting the design choices, technologies used, and lessons learned.`,
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
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">Contact Form with Yahoo Mail Integration</h3>
            <p class="post-text">
              The contact form is fully functional and configured to work with Yahoo Mail:
            </p>
            <ul class="list primary">
              <li>Input validation ensures all fields are filled correctly.</li>
              <li>Submissions are handled securely and routed to my Yahoo inbox.</li>
            </ul>
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
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">Resume & About Pages</h3>
            <p class="post-text">
              The Resume and About pages provide insight into my experience and background:
            </p>
            <ul class="list primary">
              <li>The Resume page features downloadable content and interactive design.</li>
              <li>The About page shares my journey and tech stack, helping visitors get to know me better.</li>
            </ul>
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
            </ul>
          </section>

          <section class="post-section secondary">
            <h3 class="title">Challenges & Learnings</h3>
            <p class="post-text">
              Some challenges I tackled included:
            </p>
            <ul class="list primary">
              <li>Setting up email handling through Yahoo without a backend required a creative workarounds and along with a focus on client-side validation and user feedback.</li>
              <li>Maintaining fast load times even with Google Maps and project content was solved using lazy loading and efficient change detection strategies.</li>
            </ul>
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
    id:           3,
    slug:         'care-builders',
    time:         new Date('12-12-2016'),
    title:        'Care Builders at Home Site Development',
    cover:        '/assets/images/project-carebuilders-cover.png',
    gitRepo:      '',
    aspectRatio:  9/16,
    excerpt:      `Every web project is a chance to build something meaningful; However, some projects carry a deeper sense of purpose. Carebuilders at Home Omaha is one such site, built to support a trusted home care provider in connecting with families and individuals who need compassionate, professional assistance. In this article, I’ll explore how I built this site using WordPress, a customized child theme, and a modern front-end stack tailored to the organization’s needs.`,
    content:      `
      <section class="page remodeling">
        <article class="project">

          <section class="post-section">
            <p class="post-text">
              Every web project is a chance to build something meaningful; However, some projects carry
              a deeper sense of purpose. Carebuilders at Home Omaha is one such site, built
              to support a trusted home care provider in connecting with families and individuals
              who need compassionate, professional assistance. In this article, I’ll
              explore how I built this site using WordPress, a customized child theme, and a
              modern front-end stack tailored to the organization’s needs.
            </p>
          </section>

          <section class="post-section">
            <h2 class="heading">The primary objective for care builders at home omaha was to:</h2>
            <ul class="list primary">
              <li>Clearly communicate the range of in-home care services offered.</li>
              <li>Make it easy for potential clients to get in touch or schedule a consultation.</li>
              <li>Deliver a clean, professional aesthetic that aligns with the healthcare industry.</li>
              <li>Ensure performance, accessibility, and long-term maintainability.</li>
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">WordPress Foundation: Highlight Child Theme</h3>
            <p class="post-text">
              Rather than starting from scratch, I based the project on a child theme of the
              Highlight WordPress theme, which provided a stable and responsive foundation.
              This approach allowed me to:
            </p>
            <ul class="list primary">
              <li>Maintain access to Highlight’s elegant typography and layout structure.</li>
              <li>Customize templates and styles without modifying the core theme.</li>
              <li>Future-proof the site for theme updates and WordPress improvements.</li>
            </ul>
          </section>

          <section class="post-section primary">
            <h3 class="title">Enhanced with Trusted Libraries</h3>
            <p class="post-text">
              To enrich the user experience and extend functionality, I incorporated several
              trusted front-end tools:
            </p>
            <ul class="list primary">
              <li>
                <strong>Font Awesome</strong> - Used for clean, intuitive iconography throughout
                the site; especially in service highlights, contact details, and navigation elements.
              </li>
              <li>
                <strong>jQuery</strong> - jQuery powers dynamic behavior on the site, such as
                toggles for service descriptions, form interactivity, and smooth scroll effects;
                enabling a polished feel without overwhelming users.
              </li>
              <li>
                <strong>SwiperJS</strong> - I implemented SwiperJS to create responsive carousels for:
                <ul class="list primary">
                  <li>Testimonials</li>
                  <li>Visual content</li>
                  <li>Featured services</li>
                </ul>
              </li>
            </ul>
            <p>
              Its touch support ensures the site is mobile-friendly and easy to navigate on tablets or
              smartphones.
            </p>
          </section>

          <section class="post-section">
            <h3 class="title">Custom JavaScript Architecture</h3>
            <p class="post-text">
              To avoid clutter and enhance maintainability, I structured all interactive features
              using a custom JavaScript class system and ES6 modules. This modular approach allowed
              me to:
            </p>
            <ul class="list primary">
              <li>Keep scripts organized and DRY (Don’t Repeat Yourself).</li>
              <li>Encapsulate behavior for each UI component (e.g., navigation toggles, sliders).</li>
              <li>Ensure future scalability and easy debugging.</li>
            </lu>
          </section>

          <section class="post-section">
            <h3 class="title">Accessibility & SEO Focus</h3>
            <p class="post-text">
              For a service-focused organization like Carebuilders at Home Omaha, accessibility and
              visibility are crucial. I prioritized:
            </p>
            <ul class="list primary">
              <li>Semantic HTML5 and ARIA attributes.</li>
              <li>High-contrast text and large clickable areas.</li>
              <li>Fast load times with optimized images and lazy-loading where appropriate.</li>
              <li>SEO best practices, including schema markup for local business and structured content.</li>
            </lu>
          </section>

          <section class="post-section secondary">
            <h3 class="title">What Makes This Site Stand Out?</h3>
            <ul class="list primary">
              <li>Clear Calls to Action: Visitors are guided toward phone, email, or contact form engagement at every turn.</li>
              <li>Service-Oriented Design: Every element reinforces the brand’s mission of trustworthy, compassionate home care.</li>
              <li>Responsive Layout: The site performs beautifully across devices and screen sizes.</li>
              <li>Scalability: The site is ready to grow as the business evolves, from new services to potential blog or newsletter features.</li>
            </lu>
          </section>

          <section class="post-section tertiary">
            <h3 class="title">Final Thoughts</h3>
            <p class="post-text">
              Carebuilders at Home Omaha was a rewarding project that combined technical execution
              with a meaningful client mission. It’s a site designed not just to inform, but to
              support people in moments when care matters most. I’m proud to have delivered a
              platform that helps this organization continue its work in the community, backed
              by strong design, clean code, and thoughtful user experience.
            </p>
          </section>

        </article>
      </section>
    `,
  },
  {
    id:           4,
    slug:         'home-mailer',
    time:         new Date('2024-02-15'),
    title:        'E-mailer With Django',
    cover:        '/assets/images/project-mailer-cover.png',
    gitRepo:      '',
    aspectRatio:  9/12,
    excerpt:      `What starts as an academic exercise can quickly evolve into a practical tool and that’s exactly what happened with my Django Mailing Application. Originally conceived as a school project to demonstrate web development fundamentals, this app proved so robust and versatile that I’ve now deployed it as a service on my own home network. In this article, I’ll dive into the motivations, architecture, and features that power this localized mailing system.`,
    content:      `
      <section class="page mailer">
        <article class="project">

          <section class="post-section">
            <p class="post-text">
              What starts as an academic exercise can quickly evolve into a practical
              tool and that’s exactly what happened with my Django Mailing Application.
              Originally conceived as a school project to demonstrate web development
              fundamentals, this app proved so robust and versatile that I’ve now deployed
              it as a service on my own home network. In this article, I’ll dive into the
              motivations, architecture, and features that power this localized mailing system.
            </p>
          </section>

          <section class="post-section">
            <h2 class="heading">Project Origins & Motivation</h2>
            <p class="post-text">
              In my web development course, we were tasked with creating a simple mailing platform:
              users would register, log in, and exchange messages. I saw an opportunity to:
            </p>
            <ul class="list primary">
              <li>Deepen my Django expertise by building real-world functionality.</li>
              <li>Experiment with rich text editing, rather than plain textarea inputs.</li>
              <li>Deliver a clean, professional aesthetic that aligns with the healthcare industry.</li>
              <li>Demonstrate end-to-end development via a database models to deployment.</li>
            </ul>
            <p class="post-text">
              Once the basic prototype worked, I decided to turn it into something genuinely useful:
              a mail service for devices on my home network, perfect for sharing files, notes, and
              notifications without relying on third-party email providers.
            </p>
          </section>

          <section class="post-section">
            <h3 class="title">Tech Stack & Architecture</h3>
            <ul class="list primary">
              <li>
                <strong>Django Framework Leveraging Django’s</strong> batteries-included philosophy, I used:
                <ul class="list secondary">
                  <li><strong>Django’s auth system</strong> for secure user registration, login, and logout.</li>
                  <li><strong>Class-based views</strong> (ListView, DetailView, FormView) to structure inbox, outbox, archive, and compose pages.</li>
                  <li><strong>SQLite</strong> for easy setup in my home lab.</li>
                </ul>
              </li>
              <li>
                <strong>Quill Rich Text Editor</strong> To allow formatted messages, I integrated the Quill API on both the compose and receive views:
                <ul class="list secondary">
                  <li>Users craft emails with headings, lists, links, and inline images.</li>
                  <li>On the server side, I sanitize Quill’s Delta output into safe HTML for storage and display.</li>
                </ul>
              </li>
              <li>
                <strong>Frontend & Styling</strong>
                <ul class="list secondary">
                  <li>Users craft emails with headings, lists, links, and inline images.</li>
                  <li>On the server side, I sanitize Quill’s Delta output into safe HTML for storage and display.</li>
                </ul>
              </li>
              <li>
                <strong>Deployment</strong>
                <ul class="list secondary">
                  <li>Hosted on a Raspberry Pi within my home LAN.</li>
                  <li>Served via Gunicorn and NGINX, with HTTPS secured by a self-signed certificate for encrypted local traffic.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section class="post-section primary">
            <h3 class="title">Key Features</h3>
            <ul class="list primary">
              <li>
                <strong>Inbox, Outbox & Archive</strong>
                <ul class="list secondary">
                  <li>Inbox: Lists incoming messages in reverse chronological order.</li>
                  <li>Outbox: Shows all sent messages, including drafts.</li>
                  <li>Archive: Allows users to file away old emails for future reference.</li>
                </ul>
              </li>
             <li>
                <strong>Compose View with Quill</strong>
                <ul class="list secondary">
                  <li>A rich text toolbar empowers users to style content.</li>
                  <li>Drafts are auto-saved via AJAX, preventing lost work.</li>
                </ul>
              </li>
              <li>
                <strong>User Management</strong>
                <ul class="list secondary">
                  <li>Registration restricted to devices on the local network (via IP whitelist).</li>
                  <li>Password reset flows send temporary links displayed directly in the user’s inbox.</li>
                </ul>
              </li>
              <li>
                <strong>Localized Mail Delivery</strong>
                <ul class="list secondary">
                  <li>Mail stays within the home network, ideal for quick exchanges without external dependencies.</li>
                  <li>Perfect for sharing configuration notes, temporary credentials, or family reminders.</li>
                </ul>
              </li>
              <li>
                <strong>Security & Sanitization</strong>
                <ul class="list secondary">
                  <li>Quill inputs are run through Django’s bleach-based sanitizer to strip harmful tags.</li>
                  <li>CSRF protection and HTTPS ensure all data in transit is safe, even on a LAN.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section class="post-section secondary">
            <h3 class="title">Challenges & Learnings</h3>
            <ul class="list primary">
              <li>
                <strong>Safe Rich Text Handling</strong><br>
                Converting Quill’s Delta format into HTML required careful sanitization. I built a custom
                pipeline that only allows whitelisted tags and attributes, preventing XSS risks.
              </li>
              <li>
                <strong>AJAX Auto-Save</strong><br>
                Implementing real-time draft saving taught me the nuances of debouncing user
                input and gracefully handling intermittent network issues.
              </li>
              <li>
                <strong>Local-Only Access Control</strong><br>
                Restricting registration and login to my LAN involved writing custom middleware that
                inspects the request’s IP address, an interesting exercise in Django’s request/response
                lifecycle.
              </li>
            </ul>
          </section>

          <section class="post-section tertiary">
            <h3 class="title">Final Thoughts & Next Steps</h3>
            <p class="post-text">
              Transforming a classroom assignment into a fully fledged home network service was
              immensely rewarding. This Django Mailing App not only sharpened my backend skills
              but also gave me a secure, private email solution for personal use.
            </p>
            <p class="post-text">I’m already exploring future enhancements:</p>
            <ul class="list primary">
              <li>Attachment support with size limits and virus scanning.</li>
              <li>Real-time notifications via WebSockets for instant mail alerts.</li>
              <li>Mobile-friendly Quill toolbar optimizations.</li>
            </ul>
            <p class="post-text">
              If you’re curious about the code or want a step-by-step tutorial, let me know; I’d be
              happy to share more detailed documentation or a GitHub walkthrough!
            </p>
          </section>

        </article>
      </section>
    `,
  },
  {
    id:           5,
    slug:         'fulton-homes',
    time:         new Date('2024-02-15'),
    title:        'Fulton Homes Site Development',
    cover:        '/assets/images/project-fulton-cover.png',
    gitRepo:      '',
    aspectRatio:  9/12,
    excerpt:      `When working with WordPress, child themes offer a powerful way to extend and customize existing themes without losing the ability to update the parent. For Fulton Homes Education, I developed a child theme of the default Twenty Sixteen theme—adding bespoke enrollment tools, integrated video training modules, and tailored styling to meet the needs of an educational center.`,
    content:      `
      <section class="page mailer">
        <article class="project">

          <section class="post-section">
            <p class="post-text">
              When working with WordPress, child themes offer a powerful way to extend
              and customize existing themes without losing the ability to update the
              parent. For Fulton Homes Education, I developed a child theme of the default
              Twenty Sixteen theme—adding bespoke enrollment tools, integrated video
              training modules, and tailored styling to meet the needs of an educational center.
            </p>
          </section>

          <section class="post-section">
            <h2 class="heading">Project Goals</h2>
            <ul class="list primary">
              <li><strong>Seamless Branding:</strong> Adapt Twenty Sixteen’s clean layout to align with Fulton Homes Education’s color palette, typography, and logo.</li>
              <li><strong>Enrollment Management:</strong> Create a streamlined interface for prospective students to submit registration inquiries and sign up for courses.</li>
              <li><strong>Training Video Library:</strong> Embed and manage a library of course videos directly within the site, giving students easy on-demand access.</li>
              <li><strong>Maintainability:</strong> Keep the parent theme intact so Fulton Homes can continue to receive core updates without overwriting customizations.</li>
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">Why a Child Theme?</h3>
            <p>Twenty Sixteen provides a solid, accessible foundation:</p>
            <ul class="list primary">
              <li>Responsive, mobile-first design.</li>
              <li>Well-structured templates and clear CSS.</li>
              <li>Frequent core updates and community support.</li>
            </ul>
            <p>By creating a child theme, I was able to:</p>
            <ul class="list primary">
              <li>Override specific template files and styles.</li>
              <li>Add custom functions in functions.php.</li>
              <li>Enqueue additional scripts and styles without touching the parent.</li>
            </ul>
          </section>

          <section class="post-section">
            <h2 class="heading">Challenges & Solutions</h2>
            <ul class="list primary">
              <li><strong>Multi-Step Form Flow:</strong> Handling state across Ajax requests required custom JavaScript to store progress in sessionStorage, ensuring users could navigate back and forth without losing input.</li>
              <li><strong>Video Performance:</strong> Serving multiple embedded videos on a page can tax bandwidth. I implemented lazy-loading of iframes and used low-res thumbnails that swap to high-res on click.</li>
              <li><strong>Parent Theme Updates:</strong> To avoid conflicts, I carefully namespaced all functions and CSS classes (fhe_ prefix) and tested updates in a staging environment before pushing live.</li>
            </ul>
          </section>

          <section class="post-section secondary">
            <h3 class="title">What I Learned</h3>
            <ul class="list primary">
              <li>The power of WordPress’s hooks and templating system for extending core functionality.</li>
              <li>Best practices for balancing custom features with maintainability.</li>
              <li>Techniques for integrating rich media (training videos) while preserving performance and accessibility.</li>
            </ul>
          </section>

          <section class="post-section tertiary">
            <h3 class="title">Final Thoughts</h3>
            <p class="post-text">
              The FHE Child Theme stands as a testament to what you can achieve by combining WordPress’s
              robust ecosystem with custom development. It equips Fulton Homes Education with a dynamic,
              branded online presence—complete with advanced enrollment workflows and an on-demand
              video library—while maintaining a rock-solid foundation for future growth.
            </p>
            <p class="post-text">
              Interested in seeing the theme in action or exploring the code? Let me know, and I can
              share a live demo or a GitHub repository walkthrough!
            </p>
          </section>

        </article>
      </section>
    `,
  },
  {
    id:           6,
    slug:         'action-site',
    time:         new Date('2024-02-15'),
    title:        'Action Site With Django',
    cover:        '/assets/images/project-actions-cover.png',
    gitRepo:      '',
    aspectRatio:  12/9,
    excerpt:      `Creating a simplified version of a real-world platform is a powerful way to learn web development and that’s exactly why I designed this Django Craigslist Clone as a school project. This site lets authenticated users post classifieds, browse by category, save listings to a wishlist, and discover similar items. Here’s how I built it, what technologies I chose, and the lessons I gained along the way.`,
    content:      `
      <section class="page mailer">
        <article class="project">

          <section class="post-section">
            <p class="post-text">
              Creating a simplified version of a real-world platform is a powerful
              way to learn web development and that’s exactly why I designed this
              Django Craigslist Clone as a school project. This site lets
              authenticated users post classifieds, browse by category, save listings to
              a wishlist, and discover similar items. Here’s how I built it, what
              technologies I chose, and the lessons I gained along the way.
            </p>
          </section>

          <section class="post-section">
            <h2 class="heading">Project Goals</h2>
            <ul class="list primary">
              <li>Mimic Core Craigslist Functionality - Allow users to register, log in, and manage their own listings.</li>
              <li>Category-Driven Browsing - Organize listings into categories (e.g., “For Sale,” “Jobs,” “Housing”) for easy navigation.</li>
              <li>User Dashboards - Provide each user with a personalized dashboard to view, edit, or delete their postings.</li>
              <li>Wishlist & Similar Items - Enable users to bookmark favorite listings and see recommendations based on shared category or keywords.</li>
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">Tech Stack & Architecture</h3>
            <p class="post-text">Django Framework:</p>
            <ul class="list primary">
              <li>Took advantage of Django’s built-in authentication for secure user workflows.</li>
              <li>Employed class-based views (ListView, DetailView, CreateView, UpdateView) to structure pages.</li>
              <li>Used SQLite in development for simplicity, with straightforward migration to Postgres in production.</li>
            </ul>
            <p class="post-text">Frontend:</p>
            <ul class="list primary">
              <li>Bootstrap for responsive grid layouts and form styling.</li>
              <li>Light use of jQuery to handle wishlist toggles and dynamic content loading without full page reloads.</li>
            </ul>
            <p class="post-text">Templates & Static Assets:</p>
            <ul class="list primary">
              <li>Leveraged Django’s template inheritance (base.html) to maintain consistent navigation and styling.</li>
              <li>Organized static files into modular css/, js/, and images/ directories.</li>
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">Core Features</h3>
            <h2 class="heading">Dashboard for Logged-In Users</h2>
            <p class="post-text">
              Each user has a personal dashboard listing their active and archived posts.
              From here they can edit details or remove listings entirely.
            </p>
            <h2 class="heading">Create & Manage Listings</h2>
            <ul class="list primary">
              <li>A multi-step form guides users through adding a title, description, price (if applicable), photos, and selecting a category.</li>
              <li>Uploaded images are stored via Django’s FileField and served through the media directory.</li>
            </ul>
            <h2 class="heading">Category Browsing</h2>
            <ul class="list primary">
              <li>Categories and subcategories are managed with a simple Category model and rendered in a sidebar for quick filtering.</li>
              <li>Pagination ensures long lists stay performant and user-friendly.</li>
            </ul>
            <h2 class="heading">Wishlist Functionality</h2>
            <ul class="list primary">
              <li>Users can “heart” a listing to add it to their wishlist, stored in a many-to-many relationship on the User model.</li>
              <li>A dedicated “My Wishlist” page displays all saved items, with direct links back to each listing.</li>
            </ul>
            <h2 class="heading">Similar Listings Recommendations</h2>
            <ul class="list primary">
              <li>On each listing page, the system queries for other items in the same category with overlapping keywords in the title or description.</li>
              <li>This lightweight similarity heuristic encourages continued exploration.</li>
            </ul>
          </section>

          <section class="post-section secondary">
            <h3 class="title">Challenges & Learnings</h3>
            <ul class="list primary">
              <li><strong>Image Upload Management</strong><br>Handling multiple photos per listing taught me how to use Django’s formsets and optimize image storage.</li>
              <li><strong>Efficient Filtering & Pagination</strong><br>Combining category filters with paginated results deepened my understanding of query chaining and database indexing.</li>
              <li><strong>User Experience Flow</strong><br>Building dashboards and wishlists highlighted the importance of clear navigation and feedback—especially for CRUD operations.</li>
            </ul>
          </section>

          <section class="post-section tertiary">
            <h3 class="title">Final Thoughts & Next Steps</h3>
            <p class="post-text">
              This Craigslist clone solidified my skills in Django’s MVC pattern, form handling, and
              template architecture. Future enhancements could include real-time chat between buyers
              and sellers, geolocation-based search, or a review/rating system. I’m excited to
              continue refining this project and exploring advanced Django features in the process.
            </p>
          </section>

        </article>
      </section>
    `,
  },
  {
    id:           7,
    slug:         'wiki',
    time:         new Date('2024-02-15'),
    title:        'Home Wiki with Django',
    cover:        '/assets/images/project-wiki-cover.png',
    gitRepo:      '',
    aspectRatio:  9/12,
    excerpt:      `Sometimes the simplest ideas make the most enduring tools. What began as a school assignment creating a basic wiki platform, has since graduated into a fully functional service running in my home lab. In this article, I’ll explore how I built this Django Wiki, the core features it offers, and the lessons I learned along the way.`,
    content:      `
      <section class="page mailer">
        <article class="project">

          <section class="post-section">
            <p class="post-text">
              Sometimes the simplest ideas make the most enduring tools.
              What began as a school assignment creating a basic wiki platform, has
              since graduated into a fully functional service running in my home lab.
              In this article, I’ll explore how I built this Django Wiki, the core features
              it offers, and the lessons I learned along the way.
            </p>
          </section>

          <section class="post-section">
            <h2 class="heading">Origins & Motivation</h2>
            <p class="post-text">
              In my web development coursework, we were tasked with implementing CRUD functionality
              in Django. I chose to build a Wiki—a collaborative knowledge base where users could:
            </p>
            <ul class="list primary">
              <li>Create new encyclopedia-style entries.</li>
              <li>View existing entries rendered from Markdown.</li>
              <li>Search for topics by keyword.</li>
              <li>Discover random pages to encourage exploration.</li>
            </ul>
            <p class="post-text">
              Once the prototype worked smoothly,
              I saw its potential as a handy reference tool on my local network—so I
              deployed it in my home lab for friends, family, and myself to share notes,
              how-tos, and project documentation.
            </p>
          </section>

          <section class="post-section">
            <h3 class="title">Tech Stack & Architecture</h3>
            <h2 class="heading">Django Framework</h2>
            <ul class="list primary">
              <li>Models: A simple Entry model stores title, content (Markdown), and timestamps.</li>
              <li>Forms & Views: Leveraged Django’s class-based CreateView, DetailView, and custom FormView for search and random-page functionality.</li>
              <li>Markdown Rendering: Integrated the Python Markdown library to convert entry content into safe HTML.</li>
            </ul>
            <h2 class="heading">Frontend & Styling</h2>
            <ul class="list primary">
              <li>Bootstrap for clean, responsive layouts.</li>
              <li>Minimal custom CSS to maintain focus on content readability.</li>
              <li>A site header with links to Create, Random, and Search pages for easy navigation.</li>
            </ul>
            <h2 class="heading">Deployment</h2>
            <ul class="list primary">
              <li>Hosted on a compact server in my home lab, served by Gunicorn and NGINX.</li>
              <li>HTTPS secured via a self-signed certificate for encrypted local access.</li>
              <li>SQLite in development; planned migration to PostgreSQL if usage grows.</li>
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">Core Features</h3>
            <ul class="list primary">
              <li>
                <strong>Create New Entries</strong><br>
                A user-friendly form prompts for a unique title and Markdown-formatted content.
              </li>
              <li>
                <strong>View Entries</strong><br>
                <ul class="list secondary">
                  <li>Each entry page renders Markdown to HTML, with syntax highlighting for code blocks.</li>
                  <li>Timestamps show creation and last-modified dates.</li>
                </ul>
              </li>
              <li>
                <strong>Search Functionality</strong><br>
                <ul class="list secondary">
                  <li>A simple search form lets users query entry titles or content (case-insensitive).</li>
                  <li>Results list matching entries with excerpts, linking directly to the full pages.</li>
                </ul>
              </li>
              <li>
                <ul class="list secondary">
                  <li>One-click access to discover random entries—implemented efficiently using Django’s ORM random ordering.</li>
                  <li>Encourages serendipitous learning and exploration.</li>
                </ul>
              </li>
              <li>
                <ul class="list secondary">
                  <li>To guard against XSS, Markdown output is run through Bleach, allowing only safe tags and attributes.</li>
                </ul>
              </li>
            </ul>
          </section>

          <section class="post-section secondary">
            <h3 class="title">Challenges & Solutions</h3>
            <ul class="list primary">
              <li>
                <strong>Efficient Random Selection</strong><br>
                Fetching a truly random entry without performance hits
                required careful use of order_by('?') on smaller datasets,
                with plans to adopt offset-based sampling for larger tables in the future.
              </li>
              <li>
                <strong>Markdown Safety</strong><br>
                Balancing rich formatting with security led me to craft a custom Bleach whitelist,
                permitting only safe HTML elements (e.g., headings, lists, links, code) while
                stripping any embedded scripts.
              </li>
              <li>
                <strong>Search Performance</strong><br>
                <p class="post-text">
                  Simple icontains filters worked well at first, but I’ve scoped a future
                  enhancement using Django’s Full-Text Search (PostgreSQL) for faster, more accurate
                  results on larger content sets.
                </p>
              </li>
            </ul>
          </section>

          <section class="post-section secondary">
            <h3 class="title">Future Improvements</h3>
            <ul class="list primary">
              <li>
                <strong>Efficient Random Selection</strong><br>
                Entry Revision History: Track changes and allow users to view or revert
                to previous versions.
              </li>
              <li>
                <strong>User Authentication & Permissions</strong><br>
                Restrict editing rights and add contributor profiles.
              </li>
              <li>
                <strong>Categories & Tags:</strong><br>
                <p class="post-text">Organize entries by topic for more intuitive browsing.</p>
              </li>
              <li>
                <strong>REST API:</strong><br>
                <p class="post-text">Expose entry data for integration with other tools or mobile apps.</p>
              </li>
            </ul>
          </section>

          <section class="post-section tertiary">
            <h3 class="title">Future Improvements</h3>
            <p class="post-text">
              Transforming a simple school project into a live wiki service has been
              immensely rewarding. The Django Wiki not only deepened my understanding of
              Django’s core features models, forms, security, and deployment—but also provided a
              genuinely useful tool for collaborative note-taking on my home network. As I continue
              to refine and expand its capabilities, this project remains both a learning laboratory
              and a practical resource.
            </p>
          </section>

        </article>
      </section>
    `,
  },
  {
    id:           8,
    slug:         'alkamist-theme',
    time:         new Date('2024-02-15'),
    title:        'Alkamist Theme Development',
    cover:        '/assets/images/project-alkamist-cover.png',
    gitRepo:      '',
    aspectRatio:  12/9,
    excerpt:      ` A portfolio theme needs to balance aesthetic flair with flexibility and performance. For my primary portfolio, I developed a hybrid WordPress theme, leveraging both traditional PHP templates and the block editor to showcase my work through custom patterns, templates, and reusable blocks. Here’s how I built it and the lessons learned along the way.`,
    content:      `
      <section class="page mailer">
        <article class="project">

          <section class="post-section">
            <p class="post-text">
              A portfolio theme needs to balance aesthetic flair with flexibility and
              performance. For my primary portfolio, I developed a hybrid WordPress
              theme, leveraging both traditional PHP templates and the block editor to
              showcase my work through custom patterns, templates, and reusable blocks.
              Here’s how I built it and the lessons learned along the way.
            </p>
          </section>

          <section class="post-section">
            <h2 class="heading">Project Vision</h2>
            <ul class="list primary">
              <li>
                <strong>Unified Design System</strong><br>
                Create a cohesive look and feel across static pages, blog posts, and project showcases.
              </li>
              <li>
                <strong>Editor-First Approach</strong><br>
                Empower content updates directly in the Gutenberg editor using custom blocks and patterns.
              </li>
              <li>
                <strong>Performance & Maintainability</strong><br>
                Combine lean PHP templates with block-based layouts for fast load times and easy future enhancements.
              </li>
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">Why a Hybrid Theme?</h3>
            <p class="post-text">While a pure block theme unlocks the full power of Gutenberg, I chose a hybrid approach to:</p>
            <ul class="list primary">
              <li>Retain granular control - over core templates (header, footer, archive layouts).</li>
              <li>Introduce block-driven sections - where content flexibility matters most—like project showcases and testimonials.</li>
              <li>Ensure backward compatibility - with existing plugins and classic widgets when needed.</li>
            </ul>
          </section>

          <section class="post-section">
            <h3 class="title">Key Features</h3>
            <ul class="list primary">
              <li>
                <strong>Dynamic Project Showcase</strong><br>
                A block pattern that queries and displays the latest projects with thumbnails,
                titles, and excerpt overlays—editable directly in the editor.
              </li>
              <li>
                <strong>Reusable Templates</strong><br>
                Custom block templates for project detail pages (single-project.html)
                that mix classic template tags with block areas for flexible content injection.
              </li>
              <li>
                <strong>Interactive Blocks</strong><br>
                <ul class="list secondary">
                  <li>Testimonial Block: Editors enter a quote, author name, and rating; the block handles markup and rich styling.</li>
                  <li>Skill Chart Block: Accepts JSON data to render an animated SVG bar chart of skills—ideal for visually showcasing expertise.</li>
                </ul>
              </li>
              <li>
                <strong>Global Patterns Library</strong><br>
                A curated set of header, call-to-action, and portfolio grid patterns, all
                registered via register_block_pattern for one-click insertion.
              </li>
            </ul>
          </section>

          <section class="post-section secondary">
            <h3 class="title">Challenges & Solutions</h3>
            <ul class="list primary">
              <li>
                <strong>Synchronizing PHP Templates with Block Templates</strong><br>
                Ensuring consistent styling between PHP-rendered templates (e.g., header.php)
                and block-rendered areas required shared SCSS variables and careful naming conventions.
              </li>
              <li>
                <strong>Block Asset Loading Optimization</strong><br>
                To prevent performance bloat, I configured conditional asset loading so that each
                block’s JavaScript and CSS only load when that block appears on the page.
              </li>
              <li>
                <strong>Editor Usability</strong><br>
                I added custom block inspector controls and contextual help texts to guide
                content creators in using patterns and blocks correctly, reducing training overhead.
              </li>
            </ul>
          </section>

          <section class="post-section tertiary">
            <h3 class="title">Final Thoughts</h3>
            <p class="post-text">
              Building a hybrid theme for my portfolio allowed me to harness the strengths of both
              classic WordPress theming and modern block editing. The result is a fast, maintainable,
              and highly flexible platform—one where I can easily add new project showcases, refine
              content layouts, and stay ahead of WordPress’s evolving ecosystem.
            </p>
            <p class="post-text">
              Interested in exploring the theme’s code or seeing a live demo? Let me know, I’d
              be happy to share more details!
            </p>
          </section>

        </article>
      </section>
    `,
  },
];

export default PROJECTS;
