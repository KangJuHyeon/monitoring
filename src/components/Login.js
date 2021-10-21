import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

function Login() {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    const onClickLogin = (data) => {
        axios
            .post(
                `${process.env.PORT}/users/login`,
                {
                    nickname: data.nickname,
                    password: data.password,
                    retrypassword: data.retrypassword,
                },
                {
                    'Content-Type': 'application/json',
                },
            )
            .then(function (res) {
                console.log(res);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        axios
            .get(`${process.env.PORT}/users/login`)
            .then((res) => console.log(res))
            .catch();
    }, []);

    return (
        <div className="Login">
            <div className="form">
                <form>
                    <div className="form-floating">
                        <input
                            id="floatingInput"
                            type="text"
                            value={inputId}
                            onChange={handleInputId}
                            className="form-control"
                        />
                        <label>이름</label>
                    </div>
                    <div className="form-floating">
                        <input
                            id="floatingPassword"
                            type="password"
                            value={inputPw}
                            onChange={handleInputPw}
                            className="form-control"
                        />
                        <label>비밀번호</label>
                    </div>
                    <div className="form-floating">
                        <input
                            id="repeat"
                            type="password"
                            className="form-control"
                        />
                        <label>비밀번호 재입력</label>
                    </div>
                    <button
                        className="btn"
                        type="submit"
                        onClick={onClickLogin}
                    >
                        생성하기
                    </button>
                </form>
            </div>
        </div>
    );
}
export default withRouter(Login);
