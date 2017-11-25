const express = require('express')
const expressGraphQL = require('express-graphql')
const schema = require('./schema.js')

const app = express();

var port = 3001

app.use('/graphql', expressGraphQL({
    schema: schema,
    graphiql: true
}))

app.listen(port, () => {console.log("server running on port " + port + " ...")})

