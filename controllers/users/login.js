const { user } = require('../../models');

module.exports = async (req, res) => {
    const { nickname, password } = req.body;
    try {
        const userInfo = await user.findOne({
            where: {
                nickname: nickname,
                password: password,
            },
        });
        console.log(req.body.nickname);
        if (!userInfo) {
            return res.status(403).send({
                message: '회원정보가 없습니다. 회원가입을 먼저 진행해주세요.',
            });
        }

        const payload = {
            id: userInfo.id,
            nickname: userInfo.nickname,
        };

        res.status(200).send({
            user: payload,
            message: '성공적으로 로그인이 되었습니다.',
        });
    } catch (error) {
        console.error(error);
    }
};
