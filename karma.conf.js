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
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      karmaJasmine,
      // chromeLauncher,
      firefoxLauncher,
      jasmineHtmlReporter,
      coverage,
      angularBuildPlugin
    ],

    client: {
      jasmine: { // random: false, seed: 4321
      },
      clearContext: false
    },

    jasmineHtmlReporter: {
      suppressAll: false,
      suppressFailed: false
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
    customLaunchers: {
      FirefoxHeadless: {
        base: 'Firefox',
        flags: ['-headless', '--no-remote']
      }
    },
    restartOnFileChange: true
  });
}
