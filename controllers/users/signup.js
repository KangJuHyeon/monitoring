const { user } = require('../../models');
const { hashPassword } = require('../../utils/utils');

module.exports = async (req, res) => {
    const { nickname, password, retrypassword } = req.body;

    if (!nickname || !password || !retrypassword) {
        return res.status(400).end();
    }

    try {
        const hashedPassword = hashPassword(password);
        const [userInfo, created] = await user.findOrCreate({
            where: {
                nickname,
            },
            defaults: {
                nickname,
                password: hashedPassword,
            },
        });

        if (!created) {
            return res
                .status(409)
                .send({ message: '중복된 닉네임이 있습니다.' });
        }
        res.status(200).send({
            userInfo,
            message: '성공적으로 회원가입이 되었습니다.',
        });
    } catch (error) {
        console.error(error);
        res.status(500).end();
    }
};
