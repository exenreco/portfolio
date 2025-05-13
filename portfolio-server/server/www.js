import 'dotenv/config';
import path from 'path';
import { fileURLToPath } from 'url';

const
  __filename = fileURLToPath(import.meta.url),
  __dirname = path.dirname(__filename)
;


// ── Load .env before any imports ──
//dotenv.config({ path: path.resolve(__dirname, '../.env') });

console.log('SERVER');
console.log('=========================================')
console.log('SMTP_HOST=', process.env.SMTP_HOST);
console.log('SMTP_PORT=', process.env.SMTP_PORT);

/**
 ** Module Dependencies
 ** =========================================================================*/
import fs from 'fs';
import cors from 'cors';
import http from 'http';
import https from 'https';
import express from 'express';
import mailingAPI from './http.mailing.js';
import projectsAPI from './http.projects.js';


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
        console.error(bind + ' requires elevated privileges');
        process.exit(1);
        break;
      case 'EADDRINUSE':
        console.error(bind + ' is already in use');
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
    const addr = server.address();
    if (!addr) {
      console.log(`   - ${name} is listening (address info not available)`);
      return;
    }
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log(`   - The ${name} is listening on ${bind}`);
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
  ServerPort =  normalizePort(process.env.SERVER_PORT || 3000),

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
  DevURL = process.env.DEV_URL || 'http://localhost',

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
  ProdURL = process.env.PROD_URL || 'https://portfolio-server-u87c.onrender.com/',


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

  httpsServer = https.createServer(serverOptions, app),

  httpServer = http.createServer(app)
  /*httpServer = http.createServer((req, res) => {
    // Redirect every request to the same URL on HTTPS
    const host = req.headers.host?.replace(/:\d+$/, `:${ServerPort}`);
    res.writeHead(301, { Location: `https://${host}${req.url}` });
    res.end();
  })*/
;

/**
 ** Sets the server port or defaults to -> 3000
 ** =========================================================================*/
app.set('port', ServerPort),

/**
 ** Enable CORS for Angular development server
 ** =========================================================================*/
app.use(cors({ origin: [ `http://${DevURL}:${DevPort}`, `https://${ProdURL}` ] })),

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
app.use((req, res) => res.status(404).json({ error: 'Not found' })),

/**
 ** Create Server -> creates the HTTPS server instance.
 ** =========================================================================*/
httpsServer
  .listen(ServerPort, () => console.log(`The HTTP Server has started!`) )
  .on('error', onError)
  .on('listening', () => onListening('Express Server', httpsServer));

/**
 ** Create Server -> creates HTTP the server instance.
 ** =========================================================================*/
httpServer
  .listen(80, () => console.log('   - HTTP -> HTTPS redirector listening on port 80'));
  /*.listen(ServerPort, () => console.log(`The HTTP Server has started!`) )
  .on('error', onError)
  .on('listening', () => onListening('Express Server', httpServer));*/
