const express = require('express')
const app = express()

app.get('/', (request, response) => {
    response.send({ message: 'hello world' })
})

app.listen(9000, () => console.log('listening on port 9000'))