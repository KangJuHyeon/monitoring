import '../scss/Login.scss';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setIsLogin, setUserInfo } from '../actions/index';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Login() {
    const [nickname, setInputNick] = useState('');
    const [password, setInputPw] = useState('');
    const [retrypassword, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const dispatch = useDispatch();

    const onChangeNick = (e) => {
        setInputNick(e.target.value);
    };

    const onChangePassword = (e) => {
        setInputPw(e.target.value);
    };

    const onChangePasswordCheck = (e) => {
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };

    const onSubmit = (data) => {
        data.preventDefault();

        if (password !== retrypassword) {
            return setPasswordError(true);
        }

        axios
            .post(
                'http://localhost:3000/users/login',
                {
                    nickname,
                    password,
                    retrypassword,
                },
                {
                    'Content-Type': 'application/json',
                },
            )
            .then(function (res) {
                dispatch(setIsLogin(true));
                dispatch(setUserInfo(res.data.user));
                if (!setIsLogin) {
                    alert('다시 가입해주세요.');
                } else {
                    alert('가입을 성공적으로 완료했습니다.');
                    document.location.href = '/dashboard';
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="login-box">
            <form className="form" onSubmit={onSubmit}>
                <div>
                    <object
                        width="64"
                        height="64"
                        data="/angry-bird-icon.png"
                    ></object>
                    <div
                        style={{
                            fontSize: '28px',
                            fontWeight: 'bold',
                            marginTop: '5px',
                        }}
                    >
                        Uptime Kuma
                    </div>
                </div>
                <p>관리자 계정 만들기</p>
                <div className="form-floating">
                    <input
                        id="floatingInput"
                        type="text"
                        placeholder="이름"
                        value={nickname}
                        onChange={onChangeNick}
                        className="form-control"
                    />
                    {/* <label className="floatingId">이름</label> */}
                </div>
                <div className="form-floating-m1x">
                    <input
                        id="floatingPassword"
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={onChangePassword}
                        className="form-control"
                    />
                    {/* <label className="floatingpwd">비밀번호</label> */}
                </div>
                <div className="form-floating-m1x">
                    <input
                        id="repeat"
                        type="password"
                        placeholder="비밀번호 재입력"
                        value={retrypassword}
                        onChange={onChangePasswordCheck}
                        className="form-control"
                    />
                    {passwordError && (
                        <div style={{ color: 'red' }}>
                            비밀번호가 일치하지 않습니다.
                        </div>
                    )}
                    {/* <label className="retryPassword">비밀번호 재입력</label> */}
                </div>
                <button className="login-btn" type="submit">
                    생성하기
                </button>
            </form>
        </div>
    );
}
export default withRouter(Login);
