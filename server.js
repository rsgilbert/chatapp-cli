const express = require('express')
const morgan = require('morgan')

const app = express()

// cors
const cors = require('cors')
let corsOptions = {
	origin: "http://localhost:8080",
	optionsSuccessStatus: 200,
}
app.use(cors(corsOptions));

var history = require('connect-history-api-fallback')
const staticFileMiddleware = express.static('dist')

app.use(staticFileMiddleware)
app.use(history({
    index: '/dist/index.html'
}))
app.use(morgan('short'))

const port = process.env.PORT || 3000
app.listen(3000, () => console.log("Serving at port " + port))

app.post('/auth/register', (req, res) => {
    res.send("successfully sent register call" + req.body)
})

app.post('/auth/login', (req, res) => {
    res.send("successfully sent login call")
})

app.use((req, res) => {
    res.redirect('/')
})