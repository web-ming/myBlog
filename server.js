const Nuxt = require('nuxt')
const app  =  require('express')()
const host = process.env.HOST || '127.0.0.1'
const port = process.env.PORT || 3000
const config = require('./nuxt.config')
config.dev = !(process.env.NODE_ENV === 'production')

app.set('port', port)

// Import and Set Nuxt.js options

// Init Nuxt.js
const nuxt = new Nuxt(config)
app.use(nuxt.render)

// Build only in dev mode
if (config.dev) {
  nuxt.build()
  .catch((error) => {
  	// eslint-disable-line no-console
    console.error(error)
    process.exit(1)
  })
}

// Listen the server
app.listen(port, host)
// eslint-disable-line no-console
console.log(`Nuxt.js SSR Server listening on ${host} : ${port}, at ${new Date().toLocaleString()}`)
