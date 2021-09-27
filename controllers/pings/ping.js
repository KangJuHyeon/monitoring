const http = require('http');

module.exports = (req, res) => {

    const options = {
        host: 'localhost',
        port: 8888,
        path: '/ping?url=www.google.com&count=4'
      };
      
    const request = http.request(options, response => {
        console.log(`statusCode:' ${res.statusCode}`);

        response.on('data', (d) => {
            process.stdout.write(d);
        })

    })
        request.on('error', error => {
            console.error(error)
        })
    request.end()
    res.status(200).send({ message: "호출 성공" })
}
