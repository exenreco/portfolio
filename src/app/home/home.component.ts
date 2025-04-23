import { Component, AfterViewInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterLink } from '@angular/router';

import { register } from 'swiper/element/bundle';
import { SwiperContainer, SwiperSlide } from 'swiper/element';

register(); // Register Swiper web components

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  template: `
    <swiper-container
      loop="true"
      speed="800"
      class="mySwiper"
      grabCursor="true"
      navigation="true"
      space-between="20"
      effect="coverflow"
      slides-per-view="auto"
      pagination='{"clickable": true}'
      autoplay='{"delay": 3000, "disableOnInteraction": true}'
      coverflowEffect="{ rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: true }"
    >
      <swiper-slide class="slide slide-1">
        <div class="background" style="background-image: url(/images/exenreco.png);"></div>
        <div class="content">
          <div class="attachment">
            <img
              src="/images/exenreco.png"
              alt="image of exenreco"
              style="margin: auto;"
            >
          </div>
          <section class="text">
            <h2 class="heading" style="text-align:center; border-bottom: none;">Welcome to...</h2>
            <h2
              class="heading"
              style="text-align:center; font-family: 'Marck Script', cursive; font-size: 42pt; text-transform: none;"
            >Exenreco's Story</h2>
            <p style="text-align: center; margin-bottom: 1em;">Developer | Designer | Dreamer...</p>
            <div class="CTAs" style="justify-content: center;">
              <a class="btn primary">About</a>
              <a class="btn secondary">Projects</a>
              <a class="btn tertiary">Resume</a>
            </div>
          </section>
        </div>
      </swiper-slide>

      <swiper-slide class="slide slide-2">
        <div class="background" style="background-image: url(/images/exenreco.png);"></div>
        <div class="content">
          <div class="attachment">
            <img
              src="/images/exenreco.png"
              alt="Slide 1"
              style="margin: auto;"
            >
          </div>
          <section class="text">
            <h2 class="heading" style="text-align:center;">I'm Exenreco Bell</h2>
            <p>
              Hello there! I'm the voice behind this website, and I am thrilled to share
              a bit of my world with you. My journey began in 2025 with a
              simple idea: to create a space where the unique tapestry of
              my life's stories could be woven together...
            </p>
            <div class="CTAs" style="justify-content: center;">
              <a class="btn primary">Read More</a>
              <a class="btn secondary">Fun fact</a>
            </div>
          </section>
        </div>
      </swiper-slide>

      <swiper-slide class="slide slide-3">
        <div class="background" style="background-image: url(/images/exenreco.png);"></div>
        <div class="content">
          <div class="attachment">
            <img
              src="/images/exenreco.png"
              alt="Slide 1"
              style="margin: auto;"
            >
          </div>
          <section class="text">
            <h2 class="heading" style="text-align:center;">I'm Exenreco Bell</h2>
            <p>
              Hello there! I'm the voice behind Exenreco, and thrilled to share
              a bit of my world with you. My journey began in 2024 with a
              simple idea: to create a space where the unique tapestry of
              my life's stories could be woven together.
            </p>
            <div class="CTAs" style="justify-content: center;">
              <a class="btn primary">Learn More</a>
              <a class="btn tertiary">Fun fact</a>
            </div>
          </section>
        </div>
      </swiper-slide>
    </swiper-container>

    <div class="home-section who">
      <div class="container">
        <section class="content">
          <h2 class="title">Who is Exenreco?</h2>
          <p class="text">
            I’m Exenreco Bell, based in Omaha, Nebraska, where I combine my
            Caribbean-rooted technical education (CAPE and CXC certifications in IT,
            Engineering, Mathematics, and more) with hands-on roles across
            industries—from truck loading at Oriental Trading Company to multimedia
            freelancing at Rhythmz Lounge. Beyond the screen, I indulge my creativity
            through 3D printing and photography, all documented in my portfolio.
            Collaborative and resourceful, I’m ready to partner with forward-thinking
            teams to craft impactful digital solutions.
          </p>
          <button type="button" class="btn primary" routerLink="/contact">
            Contact <i class="fa-solid fa-paper-plane"></i>
          </button>
        </section>
        <div class="attachment"><img src="/images/exenreco.png"></div>
      </div>
    </div>

    <section class="home-section quote">
      <h2 class="title"><i class="fa-solid fa-quote-left"></i></h2>
      <p class="text">
        Success is not final, failure is not fatal: It is the
        courage to continue that counts.
      </p>
      <span class="by">- <i>Winston Churchill</i></span>
    </section>

    <div class="home-section why">
      <div class="container">
        <div class="attachment"><img src="/images/exenreco.png"></div>
        <section class="content">
          <h2 class="title">Why Exenreco?</h2>
          <p class="text">
            Driven by a passion for problem-solving and continuous learning, I thrive on
            taking on new challenges that bridge creative design with technical innovation.
            My engineering background fuels my methodical approach to development,
            whether optimizing UI performance or designing 3D-printed tooling for
            my home lab. I believe that exceptional digital experiences are born
            from meticulous attention to detail and a willingness to explore emerging
            technologies—whether that’s tweaking a PHP module, architecting a React
            component, or capturing and manipulating imagery to bring a client’s
            vision to life.
          </p>
          <button type="button" class="btn primary" routerLink="/contact">
            Contact <i class="fa-solid fa-paper-plane"></i>
          </button>
        </section>
      </div>
    </div>

    <div class="home-section what">
      <div class="container">
        <section class="content">
          <h2 class="title">Unpacking My Technical Expertise?</h2>
          <p class="text">
            I am a versatile Web Developer and Graphic Designer with a strong foundation in
            Information Technology and a background in Mechanical & Electrical Engineering.
            Holding an Associate’s degree in IT (Web Development major, Computer Programming minor)
            from Metropolitan Community College Nebraska, I’ve honed my craft building dynamic,
            responsive websites and applications using JavaScript, React, Backbone, jQuery,
            HTML/CSS, XML, C++, PHP, and WordPress. Beyond coding, I’ve served as a Technical
            Engineer at FISERV, freelanced on custom web projects, and led IT operations as
            Director of IT for Care Builders at Home, ensuring seamless integration of frontend
            interfaces with robust back-end systems.
          </p>
          <button type="button" class="btn primary" routerLink="/contact">
            Contact <i class="fa-solid fa-paper-plane"></i>
          </button>
        </section>
        <div class="attachment"><img src="/images/exenreco.png"></div>
      </div>
    </div>

    <section class="home-section contact">
      <h2 class="title">Getting In Touch...</h2>
      <p class="text">Follow the link to reach out to Exenreco</p>
      <button type="button" class="btn primary" routerLink="/contact">
        Contact <i class="fa-solid fa-paper-plane"></i>
      </button>
    </section>
  `,
  styles: `
    /* front page content style rules
    *************************************************************************/
    swiper-container {
      width: 100%;
      height: 92vh;
      background: var(--accent-color-secondary, #000);
    }
    swiper-container::before {
      left: 0;
      right: 0;
      z-index: 9;
      width: 4em;
      opacity: .4;
      height: 2em;
      margin: auto;
      display: flex;
      bottom: 1.5em;
      flex: 0 0 auto;
      font-weight: 900;
      content: '\uf078';
      font-size: 1.825rem;
      position: absolute;
      align-items: center;
      justify-items: center;
      justify-content: center;
      color: var(--text-color, #fff);
      font-family: "Font Awesome 6 Free";
      animation: bounce 1s infinite;
    }
    swiper-slide {
      display: flex;
      font-size: 18px;
      text-align: center;
      align-items: center;
      justify-items: center;
      justify-content: center;
    }
    .swiper-pagination-bullet-active {
      background-color: #fff !important;
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #fff !important;
    }

    swiper-slide .background {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -2;
      position: absolute;
      background-size: cover, 100%;
      background-repeat: no-repeat;
    }
    swiper-slide .background:after {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: 1;
      content: '';
      position: absolute;
      background-color:rgba(12, 35, 80, 0.74);
      backdrop-filter: blur(25px); /* Apply blur effect */
      -webkit-backdrop-filter: blur(35px); /* For Safari compatibility */
    }
    /* SLIDE COLORS */
    swiper-slide.slide-1 .background:after { background-color:rgba(12, 35, 80, 0.74); }
    swiper-slide.slide-2 .background:after { background-color:rgba(88, 6, 40, 0.74); }
    swiper-slide.slide-3 .background:after { background-color:rgba(88, 32, 6, 0.74); }

    swiper-slide .content {
      z-index: 6;
      width: 100%;
      padding: .4em;
      display: flex;
      flex: 0 0 auto;
      align-items: flex-start;
      justify-items: center;
      flex-direction: column;
      justify-content: center;
      max-width: calc(100% - .8em);
      min-width: calc(100% - .8em);
    }
    swiper-slide .content .attachment,
    swiper-slide .content .text {
      margin: auto;
      padding: .4em;
      display: flex;
      flex: 0 0 auto;
      color: var(--text-color, #fff);
    }
    swiper-slide .content .attachment {
      margin: auto;
      text-align: left;
      align-items: start;
      flex-direction: row;
      justify-content: left;
      width: calc(100% - .8em);
      max-width: calc(1440px - .8em);
      min-width: calc(20px - .8em);
    }
    swiper-slide .content .attachment img {
      margin: 0;
      width: 30%;
      height: auto;
      display: block;
      border-radius: .4em;
    }

    swiper-slide .content .text {
      text-align: left;
      font-weight: 400;
      font-size: 1.625rem;
      justify-items: left;
      line-height: 2.225rem;
      justify-content: left;
      flex-direction: column;
      width: calc(100% - .8em);
      max-width: calc(1440px - .8em);
      min-width: calc(20px - .8em);
    }
    swiper-slide .content .text .heading {
      width: 100%;
      text-align: left;
      margin-bottom: .6em;
      font-size: 2.252rem;
      font-weight: bolder;
      text-transform: uppercase;
      border-bottom: 0.2em solid var(--tertiary-color, orange);
    }
    swiper-slide .content .text .CTAs {
      width: 100%;
      height: auto;
      display: flex;
      flex: 0 0 auto;
      min-height: 4em;
      align-items: center;
      flex-direction: row;
      justify-items: right;
      justify-content: right;
    }
    swiper-slide .content .text .CTAs > .btn {
      display: flex;
      flex: 0 0 auto;
      flex-direction: row;
      justify-content: center;
    }

    .home-section {
      display: flex;
      flex: 0 0 auto;
    }

    .home-section .title {
      font-size: 1.925rem;
      font-weight: bolder;
      text-transform: uppercase;
    }
    .home-section .text {
      font-size: 1.225rem;
    }

    .home-section.who,
    .home-section.what,
    .home-section.why,
    .home-section.quote,
    .home-section.contact {
      height: auto;
      min-height: 24em;
      flex-direction: column;
      padding: 2em .2em 2em .2em;
    }

    .home-section.quote {
      min-height: 12em;
      background: var(--text-color, #fff);
      color: var(--text-color-inverted, #000);
    }
    .home-section.quote .title {
      margin: auto;
      font-size: 4.125rem;
      width: calc(100% - .4em);
      max-width: 1440px;
      color: var(--text-color-inverted, #333);
    }
    .home-section.quote .text {
      margin: auto;
      font-weight: bold;
      text-align: left;
      text-indent: 2.125rem;
      font-size: 2.425rem;
      width: calc(100% - .4em);
      max-width: 1440px;
      color: var(--text-color-inverted, #333);
    }
    .home-section.quote .by {
      margin: auto;
      padding: .4em;
      margin-top: 1em;
      text-align: right;
      font-size: 1.125rem;
      width: calc(100% - .8em);
      max-width: calc(1440px - .8em);
      color: var(--text-color-inverted, #333);
    }
    .home-section.quote .by i {
      font-style: italic;
    }

    .home-section.contact {
      min-height: 12em;
      text-align: center;
      align-items: center;
      flex-direction: column;
      justify-items: center;
      justify-content: center;
      background: var(--text-color, #fff);
      color: var(--text-color-inverted, #000);
    }
    .home-section.contact .text {
      font-size: 2.425rem;
      margin: .8rem 0 .8em 0;
    }
    .home-section.contact .btn {
      margin: auto;
    }

    .home-section.who,
    .home-section.what,
    .home-section.why {
      min-height: 40em;
      flex-direction: row;
    }
    .home-section.who .container,
    .home-section.what .container,
    .home-section.why .container {
      margin: auto;
      padding: .4em;
      display: flex;
      flex: 0 0 auto;
      flex-direction: row;
      width: calc(100% - .8em);
      max-width: calc(1440px - .8em);
    }
    .home-section.who .container .attachment,
    .home-section.what .container .attachment,
    .home-section.why .container .attachment {
      width: 30%;
    }
    .home-section.who .container .attachment img,
    .home-section.what .container .attachment img,
    .home-section.why .container .attachment img {
      width: 100%;
      height: auto;
      margin: auto;
      display: block;
      position: relative;
    }
    .home-section.who .container .content,
    .home-section.what .container .content,
    .home-section.why .container .content {
      padding: 1em;
      width: calc(100% - 32% );
    }
    .home-section.who .container .content .title,
    .home-section.what .container .content .title,
    .home-section.why .container .content .title {
      margin-bottom: .8em;
    }
    .home-section.who .container .content .text,
    .home-section.what .container .content .text,
    .home-section.why .container .content .text {
      font-size: 1.425rem;
      line-height: 1.625rem;
    }

    .home-section.who {
      background: var(--secondary-color, #000);
      color: var(--text-color, #fff);
    }

    .home-section.what {
      background: var(--accent-color-secondary, #333);
      color: var(--text-color, #fff);
    }

    .home-section.why {
      background: var(--tertiary-color, #333);
      color: var(--text-color, #fff);
    }

    /* Tablet style rules
    **************************************************************************/
    @media (max-width: 1080px) {
      swiper-slide .content .attachment img {
        width: 65%;
        margin: auto;
        height: auto;
        display: block;
        border-radius: .4em;
      }
      swiper-slide .content .text .CTAs {
        padding-top: .6em;
        align-items: center;
        justify-items: center;
        flex-direction: column;
        justify-content: center;
      }
      .home-section.quote .text {
        text-align: center;
      }
    }

    /* Mobile style rules
    **************************************************************************/
    @media (max-width: 800px) {
      swiper-slide .content .attachment img {
        width: 95%;
        margin: auto;
        height: auto;
        display: block;
        border-radius: .4em;
      }
      swiper-slide .content .text .CTAs {
        padding-top: .6em;
        align-items: center;
        justify-items: center;
        flex-direction: column;
        justify-content: center;
      }
      .home-section.quote .text {
        text-align: center;
      }
      .home-section.who .container,
      .home-section.what .container,
      .home-section.why .container {
        flex-direction: column;
      }
      .home-section.who .container .attachment,
      .home-section.what .container .attachment,
      .home-section.why .container .attachment {
        width: 100%;
      }
      .home-section.who .container .content,
      .home-section.what .container .content,
      .home-section.why .container .content {
        width: calc(100% - 2em);
        margin: auto;
      }
    }
  `
})
export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Optional: Add custom initialization if needed
    const swiperEl = document.querySelector('swiper-container') as SwiperContainer;

    // Object with parameters
    const swiperParams = {
      injectStyles: [
        `
        .swiper-button-next,
        .swiper-button-prev {
          background-color: rgba(0,0,0,0.5);
          padding: 16px; border-radius: 50%;
        }
        `
      ],
    };

    // Assign parameters to swiper element
    Object.assign(swiperEl, swiperParams);

    // Initialize swiper
    swiperEl.initialize();
  }
}
