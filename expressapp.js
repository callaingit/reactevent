let express = require('express')

let app = express()

/*
app.use('/', (req, res, next) => {
    console.log("in first middleware function /")
    next()
})


app.get('/json',
 (req, res, next) => {
    console.log("in first route handler function /")
    res.locals.joe = 32 // This emulates DB access
    // If we would call next('route') here, the next callback for this route is skipped
    next()
 },
 (req, res, next) => {
    console.log("in second route handler function /")
    //##res.contentType = 'text/plain'
    res.json({firstName:'Carl', lastName:'Allain', age: res.locals.joe, "date": `${new Date().toISOString()}` }) // Content-Type, etc. all set for us
    next() // If next() is not called, no other middleware function is invoked
 }
)
*/

app.use(express.static('public'))

/*
app.use('/', (req, res, next) => {
    console.log("in second middleware function /")
    next()
})
*/


console.log('Sarting on port 8080...')
app.listen(8080, () => { console.log('Ready') } )

