import path from 'path';
import { fileURLToPath } from 'url';
import karmaJasmine from 'karma-jasmine';
import firefoxLauncher from 'karma-firefox-launcher';
import jasmineHtmlReporter from 'karma-jasmine-html-reporter';
import coverage from 'karma-coverage';
import angularBuildPlugin from '@angular-devkit/build-angular/plugins/karma.js';

const
__filename = fileURLToPath(import.meta.url),
__dirname = path.dirname(__filename);

export default function (config) {
  config.set({
    basePath: '',
    files: [
      { pattern: '/portfolio-server', watched: false, type: 'module' },
      { pattern: '/dist', watched: false, type: 'module' }
    ],
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      karmaJasmine,
      //chromeLauncher,
      firefoxLauncher,
      jasmineHtmlReporter,
      coverage,
      angularBuildPlugin
    ],

    client: {
      jasmine: {
        // you can add configuration options for Jasmine here
        // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
        // for example, you can disable the random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false
    },
    jasmineHtmlReporter: {
      suppressAll: true
    },
    coverageReporter: {
      dir: path.join(__dirname, './coverage/portfolio'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    browsers: ['Firefox'],
    restartOnFileChange: true
  });
}
