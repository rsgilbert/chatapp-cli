const express = require('express')
const morgan = require('morgan')

const app = express()
var history = require('connect-history-api-fallback')
const staticFileMiddleware = express.static('dist')

app.use(staticFileMiddleware)
app.use(history({
    index: '/dist/index.html'
}))
app.use(morgan('short'))

const port = process.env.PORT || 3000
app.listen(3000, () => console.log("Serving at port " + port))

app.use((req, res) => {
    res.redirect('/')
})