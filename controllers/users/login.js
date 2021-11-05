const { user } = require('../../models');

module.exports = async (req, res) => {
    const { nickname, password } = req.body;
    const session = req.session;

    try {
        const userInfo = await user.findOne({
            where: {
                nickname: nickname,
                password: password,
            },
        });

        if (!userInfo) {
            return res.status(403).send({
                message: '회원정보가 없습니다. 회원가입을 먼저 진행해주세요.',
            });
        }

        const payload = {
            id: userInfo.id,
            nickname: userInfo.nickname,
        };

        session.sessionID = userInfo.id;

        res.cookie('cookie', session.sessionID, {
            domain: 'localhost',
            path: '/',
            maxAge: 24 * 6 * 60 * 1000,
            sameSite: 'none',
            secure: true,
        });

        if (req.session.sessionID) {
            console.log(req.session.sessionID, '가 접속했습니다.');
        } else {
            console.log('잘못된 유저입니다.');
        }
        res.status(200).send({
            session: session.sessionID,
            user: payload,
            message: '성공적으로 로그인이 되었습니다.',
        });
    } catch (error) {
        console.error(error);
    }
};
