import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

const
  __filename = fileURLToPath(import.meta.url),
  __dirname = path.dirname(__filename)
;

/**
 ** Module Dependencies
 ** =========================================================================*/
import fs from 'fs';
import cors from 'cors';
import http from 'http';
import chalk from 'chalk';
import https from 'https';
import express from 'express';
import mailingAPI from './http.mailing.js';
import projectsAPI from './http.projects.js';
import { warn, error, success, message } from '../chalk.config.js';


const

  /**
   * NORMALIZE PORT
   *
   * Normalize a port into a number, string, or false.
   *
   * @type function
   *
   * @param {any} val - The given port number
   *
   * returns - an {int} when valid, "the received port number" otherwise {false}.
   *
   * @date May 10, 2025
   *
   * @since version 1.0.0
   *
   * @dependency {void}
   *
   * @dev R.Krasso
   */
  normalizePort = (val) => {

    const port = parseInt(val, 10);

    // named pipe
    if (isNaN(port)) return val;

    // port number
    if (port >= 0) return port;

    return false;
  },

  /**
   * ON ERROR
   *
   * Event listener for HTTP server "error" event.
   *
   * @type function
   *
   * @param {any} error - The given error
   *
   * returns - {void}
   *
   * @date May 10, 2025
   *
   * @since version 1.0.0
   *
   * @dependency {void}
   *
   * @dev R.Krasso
   */
  onError = (error) => {

    if (error.syscall !== 'listen') throw error;

    const bind = typeof ServerPort === 'string'
      ? 'Pipe ' + ServerPort
      : 'Port ' + ServerPort;

    // handle specific listen errors with friendly messages
    switch (error.code) {
      case 'EACCES':
        console.error(error(bind + ' requires elevated privileges'));
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(error(bind + ' is already in use'));
        process.exit(1);
        break;
      default:
        throw error;
    }
  },

  /**
   * ON LiSTENING
   *
   * Event listener for HTTP server "listening" event.
   *
   * @type function
   *
   * @param {string} name - The name of the given server
   *
   * @param {object} server - The targeted server
   *
   * returns - {void}
   *
   * @date May 10, 2025
   *
   * @since version 1.0.0
   *
   * @dependency {void}
   *
   * @dev Exenreco Bell / R.Krasso
   */
  onListening = (name, server) => {
    const
    addr = server.address(),
    bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;

    if (!addr) return console.warn(
      warn(`(OK): ${name} is listening (address info not available)`)
    );

    console.log(success(`(OK): The ${name} is listening on ${bind}`));
  },

 /**
  * DEV PORT (Angular Port number)
  *
  * The defined application development port.
  *
  * @type variable
  *
  * @date May 10, 2025
  *
  * @since version 1.0.0
  *
  * @dev Exenreco Bell
  */
  DevPort =  normalizePort(process.env.DEV_PORT || 4200),

  /**
  * SERVER PORT (Express Port number)
  *
  * The defined server port.
  *
  * @type variable
  *
  * @date May 10, 2025
  *
  * @since version 1.0.0
  *
  * @dev Exenreco Bell
  */
  ServerPort =  normalizePort(process.env.SECURE_PORT || 3000),

  /**
  * SERVER PORT UNSECURE (Express Port number)
  *
  * The defined server port for unsecure requests.
  *
  * @type variable
  *
  * @date May 10, 2025
  *
  * @since version 1.0.0
  *
  * @dev Exenreco Bell
  */
  ServerPortUnsecure =  normalizePort(process.env.UNSECURE_PORT || 80),

  /**
  * DEV URL (Express LOCAL CROSS ORIGIN URL)
  *
  * Created to enable request from development site to the server.
  *
  * @type variable
  *
  * @date May 10, 2025
  *
  * @since version 1.0.0
  *
  * @dev Exenreco Bell
  */
  DevURL = `${ process.env.PROTOCOL && process.env.PROTOCOL.toLowerCase() === 'http'
      ? `${process.env.PROTOCOL.toLowerCase()}://localhost:${DevPort}`
      : `http://localhost:${DevPort}`
  }`,

  /**
  * PROD URL (Express LOCAL CROSS ORIGIN URL)
  *
  * Created to enable request from production site to the server.
  *
  * @type variable
  *
  * @date May 10, 2025
  *
  * @since version 1.0.0
  *
  * @dev Exenreco Bell
  */
  ProdURL = process.env.PRODUCTION_ADDRESS || DevURL,


  serverOptions = {
    key:  fs.readFileSync(path.join(__dirname, '../certs/privkey.pem')),
    cert: fs.readFileSync(path.join(__dirname, '../certs/fullchain.pem')),
  },

  /**
   * APP
   *
   * The express server instance
   *
   * @type function
   *
   * @date May 10, 2025
   *
   * @since version 1.0.0
   *
   * @dependency { express }
   */
  app = express(),

  // cores options
  corsProps = {
    origin: [`${DevURL}`, `${ProdURL}`], //"*",
    methods: ['GET','POST','PUT','DELETE'],
    preflightContinue: false,
    optionsSuccessStatus: 204,
    allowedHeaders: ['Content-Type','Authorization'],
    credentials: true
  }
;

/**
 ** Enable CORS for Angular development server
 ** =========================================================================*/
app.use(cors({...corsProps})),

/**
 ** Ensure server is parsing JSON
 ** =========================================================================*/
app.use(express.json()),
app.use(express.urlencoded({ extended: true })),

app.get('/', (req, res) => res.send(`
  <h1>The Portfolio Server is currently running!</h1>
  <p>Mailing endpoint can be found at - <a href="/api/mail">@See Mailing</a></p>
  <p>Projects endpoint can be found at - <a href="/api/projects">@See Projects</a></p>
  <p>The ${
    ServerPort === 3000
    ? 'Development site can be found at - <a href="http://localhost:4200">@see Development</a>'
    : 'Development site can be found at - <a href="https://exenreco.github.io/portfolio">@see Production</a>'
  }</p>
`) );

/**
 ** Sets the server endpoint -> mailing
 ** =========================================================================*/
app.use('/api/mail', mailingAPI),

/**
 ** Sets the server endpoint -> projects
 ** =========================================================================*/
app.use('/api/projects', projectsAPI),

/**
 ** Sets the server 404 Handler -> Fall-through routes
 ** =========================================================================*/
app.use((req, res) => res.status(404).json({ error: 'Not found' }));

const
  httpsServer = https.createServer(serverOptions, app), // secure server
  httpServer = http.createServer(app) // unsecure server
;

if (ProdURL && (ProdURL === 'https://localhost' || ProdURL === 'http://localhost' ) ) {
  /**
   ** Create Server -> unsecure server instance.
   ** =========================================================================*/
  httpServer
    .listen(ServerPortUnsecure, () => onListening('(Backend) Development Server', httpServer))
    .on('error', onError)
    .on('listening', () => console.log(
      chalk.green.bold(
        `- The server is ready to be queried, @see:`,
        chalk.blue.underline.bold(`${ProdURL}:${ServerPortUnsecure}\n`)
      ),
      chalk.green.bold(`- @see Mailer config SMTP_HOST: ${process.env.SMTP_HOST}\n`),
      chalk.green.bold(`- @see Mailer config SMTP_PORT: ${process.env.SMTP_PORT}\n`)
    ));
} else {
  /**
   ** Create Server -> creates the HTTPS server instance.
   ** =========================================================================*/
  httpsServer
    .listen(ServerPort, () => onListening('(Backend) Production Server', httpServer) )
    .on('error', onError)
    .on('listening', () => console.log(
      chalk.green.bold(
        `- The server is ready to be queried, @see:`,
        chalk.blue.underline.bold(`${ProdURL}:${ServerPort}\n`)
      ),
      chalk.green.bold(`- @see Mailer config SMTP_HOST: ${process.env.SMTP_HOST}\n`),
      chalk.green.bold(`- @see Mailer config SMTP_PORT: ${process.env.SMTP_PORT}\n`)
  ));

  /**
   ** Create Server -> creates HTTP the server instance for redirects.
   ** =========================================================================*/
  httpServer
    .listen(ServerPortUnsecure, () => console.log(
      chalk.green.bold(
        '- Unsecure connections will be redirected to @see:',
        chalk.blue.underline.bold(`${ProdURL}:${ServerPort}`)
      )
    ));
}
