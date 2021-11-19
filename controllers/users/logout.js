const { user } = require('../../models');

module.exports = async (req, res) => {
    const session = req.session;

    try {
        if (session) {
            session.destroy(() => {
                console.log('세션 삭제하고 로그아웃됨');
            });
            res.clearCookie('connect.sid');
            res.redirect('/');
            res.status(205).send({ message: 'Logout Success' });
        } else {
            res.status(400).send({ message: '로그인 상태 아님' });
        }
    } catch (error) {
        console.error(error);
    }
};
