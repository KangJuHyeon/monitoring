const { user } = require('../../models');
const { comparePassword } = require('../../utils/utils');
require('dotenv').config();

module.exports = async (req, res) => {
    const { nickname, password } = req.body;
    const session = req.session;

    try {
        const userInfo = await user.findOne({
            where: {
                nickname,
            },
        });
        console.log(userInfo);
        if (userInfo === null) {
            return res.status(403).send({
                message: '회원정보가 없습니다. 회원가입을 먼저 진행해주세요.',
            });
        }

        const result = comparePassword(password, userInfo.password);

        if (!result) {
            return res.status(401).send({ message: 'Invalid password' });
        }

        const payload = {
            id: userInfo.id,
            nickname: userInfo.nickname,
        };

        session.sessionID = userInfo.id;

        res.cookie('Authorization', session.sessionID, {
            domain: process.env.DOMAIN,
            path: '/',
            maxAge: 60 * 60,
            // secure: true,
        });
        // console.log(req.cookies);

        res.status(200).send({
            session: session.sessionID,
            userInfo: payload,
            message: '성공적으로 로그인이 되었습니다.',
        });
    } catch (error) {
        console.error(error);
    }
};
