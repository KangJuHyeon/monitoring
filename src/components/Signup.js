import '../scss/Signup.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Signup({ history }) {
    const [nickname, setInputNick] = useState('');
    const [password, setInputPw] = useState('');
    const [retrypassword, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);

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
            alert('비밀번호와 비밀번호 재입력이 다릅니다.');
            return setPasswordError(true);
        }

        axios
            .post(
                'http://localhost:3000/users/signup',
                {
                    nickname,
                    password,
                    retrypassword,
                },
                {
                    'Content-Type': 'application/json',
                },
            )
            .then(function () {
                alert('회원가입을 성공적으로 완료했습니다.');
                history.push('/login');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="signup-box">
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
                    />
                </div>
                <div className="form-floating-m1x">
                    <input
                        id="floatingPassword"
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        onChange={onChangePassword}
                    />
                </div>
                <div className="form-floating-m1x">
                    <input
                        id="repeat"
                        type="password"
                        placeholder="비밀번호 재입력"
                        value={retrypassword}
                        onChange={onChangePasswordCheck}
                    />
                    {passwordError && (
                        <i style={{ color: 'purple' }} className="fas fa-times">
                            {' '}
                            비밀번호가 일치하지 않습니다.
                        </i>
                        // <div style={{ color: 'red' }}>
                        //     비밀번호가 일치하지 않습니다.
                        // </div>
                    )}
                </div>
                <button className="signup-btn" type="submit">
                    생성하기
                </button>
                <div className="login-select-area">
                    <label>You have an account?</label>

                    <span onClick={() => history.push('/login')}>Login</span>
                </div>
            </form>
        </div>
    );
}
export default withRouter(Signup);
