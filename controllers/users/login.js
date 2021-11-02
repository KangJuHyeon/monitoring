const { user } = require('../../models');

module.exports = async (req, res) => {
    const { nickname, password, retrypassword } = req.body;
    console.log(req.session);

    if (!nickname || !password || !retrypassword) {
        return res.status(400).end();
    }

    try {
        const userInfo = await user.create({
            nickname,
            password,
            retrypassword,
        });

        if (!userInfo) {
            return res
                .status(400)
                .send({ data: null, message: 'not authorized' });
        } else {
            req.session.nickname = await userInfo.nickname;
            res.status(200).send({
                userInfo,
                message: '성공적으로 로그인되었습니다.',
            });
        }
    } catch (error) {
        console.error(error);
    }
};
