const { ping } = require('../../models');
const http = require('http');

module.exports = async (req, res) => {
    try {
        const URL = 'http://localhost:8888/ping?url=www.google.com&count=2';

        http.get(URL, (resp) => {
            resp.setEncoding('utf8');
            var body = '';

            resp.on('data', (data) => {
                body += data;
            });

            resp.on('end', () => {
                body = JSON.parse(body);

                ping.create({
                    region: body.region,
                    ipaddr: body.ipaddr,
                    addr: body.addr,
                    maxrtt: body.maxrtt,
                    minrtt: body.minrtt,
                    avgrtt: body.avgrtt,
                    count: body.count,
                });

                console.log(body);
                return res
                    .status(200)
                    .json({ body, message: '데이터 받기 완료했습니다!' });
            });
        });
    } catch (err) {
        console.log('err message:', err);
        return res.status(500).send({ message: '실패!' });
    }
};
