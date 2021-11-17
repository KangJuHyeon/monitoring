import '../scss/Login.scss';
import React, { useState } from 'react';
import { setIsLogin, setUserInfo } from '../actions/index';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function Login({ history }) {
    const [nickname, setInputNick] = useState('');
    const [password, setInputPw] = useState('');
    const dispatch = useDispatch();

    const onChangeNick = (e) => {
        setInputNick(e.target.value);
    };

    const onChangePassword = (e) => {
        setInputPw(e.target.value);
    };

    const onSubmit = (data) => {
        data.preventDefault();

        axios
            .post(
                'http://localhost:3000/users/login',
                {
                    nickname,
                    password,
                },
                {
                    'Content-Type': 'application/json',
                },
            )
            .then(function (res) {
                localStorage.setItem('Authorization', res.data.session);
                dispatch(setIsLogin(true));
                dispatch(setUserInfo(res.data.user));
                alert('로그인 성공 !!!');
                history.push('/dashboard');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <main className="main-form-login">
            <div className="form-container">
                <div className="form-mb">
                    <form onSubmit={onSubmit}>
                        <h1 className="h3-mb-3-normal"></h1>
                        <div className="form-floating-mb-3">
                            <input
                                id="floatingInput"
                                type="text"
                                placeholder="이름"
                                value={nickname}
                                onChange={onChangeNick}
                            ></input>
                        </div>
                        <div className="form-floating-mt-3">
                            <input
                                id="floatingPassword"
                                type="password"
                                placeholder="비밀번호"
                                value={password}
                                onChange={onChangePassword}
                            ></input>
                        </div>
                        <div className="form-check-mb-3">
                            <div className="form-check">
                                <input
                                    id="remember"
                                    className="form-check-input"
                                    type="checkbox"
                                    value="remember-me"
                                ></input>
                                <label className="form-check-label-login">
                                    비밀번호 기억하기
                                </label>
                            </div>
                        </div>
                        <button className="btn-primary" type="submit">
                            로그인
                        </button>
                        <div className="signup-select-area">
                            <label>Don't have an account?</label>

                            <span onClick={() => history.push('/')}>
                                Signup
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}

export default withRouter(Login);
