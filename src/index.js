
import http  from 'http';

const port = 3000

const requestHandler = (request, response) => {
  
  const env = process.env.EXAMPLE_VAR;
  response.end(`Hello From Node.js Server! VAR: ${env}`)
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})