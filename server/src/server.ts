import path from 'path'
import http from 'http'
import express from 'express'
import expressBodyParser from 'body-parser'
import cors from 'cors'
import * as config from './config'
import contactRoutes from './contact'

// Configuration
//
const corsOptions: cors.CorsOptions = {
  origin: function(origin, callback) {
    // The origin can be undefined for non-browser request contexts.
    if (
      origin === undefined ||
      config.corsOrigins.includes('*') ||
      config.corsOrigins.includes(origin)
    ) {
      callback(null, true)
    } else {
      callback(new Error('CORS origin check failed.'))
    }
  },
}

// Setup App
//
const app = express()
const server = new http.Server(app)

// Top-level Routes and Handlers Setup
//
app.use(cors(corsOptions))
app.use(expressBodyParser.json())
app.use('/contact', contactRoutes())

// Production Serving of Static Site
//
if (config.production) {
  app.use(express.static(config.staticPath))
  app.use((_, res) => {
    res.status(404).sendFile(path.join(config.staticPath, '404.html'))
  })
}

// Server Startup
//
const serverInstance = server.listen(config.port, () =>
  console.log(`Listening on port ${config.port}...`),
)

// Termination Handling
//
process.on('SIGINT', () => {
  console.log('Got SIGINT.')
  process.exit()
})
process.on('SIGTERM', () => {
  console.log('Got SIGTERM.')
  process.exit()
})
process.on('uncaughtException', e => {
  console.log('Uncaught', e)
  process.exit()
})
process.on('exit', shutdown)

function shutdown() {
  console.log('Shutting down...')
  serverInstance.close()
  process.exit()
}
