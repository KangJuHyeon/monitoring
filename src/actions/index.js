export const SET_IS_LOGIN = 'SET_IS_LOGIN';
export const SET_USERINFO = 'SET_USERINFO';

// actions creator functions
export const setIsLogin = (isLogin) => {
    return {
        type: SET_IS_LOGIN,
        payload: {
            isLogin,
        },
    };
};

export const setUserInfo = (userinfo) => {
    return {
        type: SET_USERINFO,
        payload: {
            ...userinfo,
        },
    };
};
