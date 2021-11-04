const { user } = require('../../models');

module.exports = async (req, res) => {
    const { nickname, password, retrypassword } = req.body;

    if (!nickname || !password || !retrypassword) {
        return res.status(400).end();
    }
    // 회원 가입 Validation은 나중에 만들어 주도록 하자.(일단 pass)

    try {
        const userInfo = await user.create({
            nickname,
            password,
        });
        res.status(200).send({
            userInfo,
            message: '성공적으로 회원가입이 되었습니다.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};
