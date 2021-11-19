import '../scss/Settings.scss';
import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { setIsLogin, setUserInfo } from '../actions/index';
import axios from 'axios';

function Settings({ isLogin, history }) {
    if (isLogin === false) {
        alert('인증 정보가 없습니다.');
        history.push('/login');
    }
    if (!localStorage.Authorization) {
        alert('인증 정보가 없습니다.');
        history.push('/login');
    }

    const dispatch = useDispatch();

    async function logout() {
        await axios
            .post('http://localhost:3000/users/logout', null, {
                headers: {
                    Authorization: localStorage.Authorization,
                },
            })
            .then(() => {
                dispatch(setIsLogin(false));
                dispatch(setUserInfo({}));
                localStorage.removeItem('Authorization');
                alert('로그아웃 되었습니다.');
                history.push('/');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <main className="main-form">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12-col-md-5">
                        <div>
                            <a href="/add" className="btn-add">
                                <object
                                    width="14"
                                    height="16"
                                    data="/add.png"
                                ></object>
                                새로운 모니터링 추가하기
                            </a>
                        </div>
                        <div className="shadow-box-mb-3">
                            <div className="list-header">
                                <div className="placeholder"></div>
                                <div className="search-wrapper">
                                    <a className="search-icon">
                                        <object
                                            className="object-inline--fa"
                                            data="/search.png"
                                        ></object>
                                    </a>
                                    <input
                                        className="form-control-1"
                                        placeholder="검색..."
                                    ></input>
                                </div>
                            </div>
                            <div className="monitor-list">
                                <div className="text-center">
                                    모니터링이 없어요.
                                    <a href="/add">{'하나 추가해봐요'}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12-col-md-7">
                        <div>
                            <h1 className="mb-3">설정</h1>
                            <div className="shadow-box">
                                <div className="row">
                                    <div className="col-md-6">
                                        <h2 className="mb-2">외형</h2>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                언어
                                            </label>
                                            <select className="form-select">
                                                <option value="en">
                                                    English
                                                </option>
                                                <option value="ko-KR">
                                                    한국어
                                                </option>
                                            </select>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                테마
                                            </label>
                                            <div>
                                                <div
                                                    className="btn-group"
                                                    role="group"
                                                    aria-aria-label="Basic Checkbox toggle button group"
                                                >
                                                    <input
                                                        id="btncheck1"
                                                        type="radio"
                                                        className="btn-check"
                                                        name="theme"
                                                        autoComplete="off"
                                                        value="light"
                                                    />
                                                    <label className="btn-btn-outline-primary">
                                                        라이트
                                                    </label>
                                                    <input
                                                        id="btncheck2"
                                                        type="radio"
                                                        className="btn-check"
                                                        name="theme"
                                                        autoComplete="off"
                                                        value="dark"
                                                    />
                                                    <label className="btn-btn-outline-primary">
                                                        다크
                                                    </label>
                                                    <input
                                                        id="btncheck3"
                                                        type="radio"
                                                        className="btn-check"
                                                        name="theme"
                                                        autoComplete="off"
                                                        value="auto"
                                                    />
                                                    <label className="btn-btn-outline-primary">
                                                        자동
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">
                                                테마 - 하트비트 바
                                            </label>
                                            <div>
                                                <div
                                                    className="btn-group"
                                                    role="group"
                                                    aria-label="Basic Checkbox toggle button group"
                                                >
                                                    <input
                                                        id="btncheck4"
                                                        type="radio"
                                                        className="btn-check"
                                                        name="heartbeadtBarTheme"
                                                        autoComplete="off"
                                                        value="normal"
                                                    />
                                                    <label className="btn-btn-outline-primary">
                                                        기본값
                                                    </label>
                                                    <input
                                                        id="btncheck5"
                                                        type="radio"
                                                        className="btn-check"
                                                        name="heartbeadtBarTheme"
                                                        autoComplete="off"
                                                        value="bottom"
                                                    />
                                                    <label className="btn-btn-outline-primary">
                                                        가운데
                                                    </label>
                                                    <input
                                                        id="btncheck6"
                                                        type="radio"
                                                        className="btn-check"
                                                        name="heartbeadtBarTheme"
                                                        autoComplete="off"
                                                        value="none"
                                                    />
                                                    <label className="btn-btn-outline-primary">
                                                        없애기
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <h2 className="mt-5-mb-2">일반</h2>
                                        <form className="mb-3">
                                            <div className="mb-4">
                                                <label className="form-label">
                                                    시간대
                                                </label>
                                                <select
                                                    id="timezone"
                                                    className="form-select"
                                                >
                                                    <option value="auto">
                                                        자동: Asia/Seoul
                                                    </option>
                                                    <option value="America/Adak">
                                                        (UTC-11:00) America/Adak
                                                    </option>
                                                    <option value="America/Vancouver">
                                                        (UTC-08:00)
                                                        America/Vancouver
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">
                                                    검색 엔진 활성화
                                                </label>
                                                <div className="form-check">
                                                    <input
                                                        id="searchEngineIndexYes"
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        required
                                                        value="true"
                                                    />
                                                    <label
                                                        htmlFor="searchEngineIndexYes"
                                                        className="form-check-label"
                                                    >
                                                        인덱싱 허용
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        id="searchEngineIndexNo"
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="flexRadioDefault"
                                                        required
                                                        value="false"
                                                    />
                                                    <label
                                                        htmlFor="searchEngineIndexNo"
                                                        className="form-check-label"
                                                    >
                                                        검색 엔진 인덱싱 거부
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">
                                                    첫 페이지
                                                </label>
                                                <div className="form-check">
                                                    <input
                                                        id="entryPageYes"
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="statusPage"
                                                        required
                                                        value="dashboard"
                                                    />
                                                    <label className="form-check-label">
                                                        대시보드
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input
                                                        id="entryPageNo"
                                                        className="form-check-input"
                                                        type="radio"
                                                        name="statusPage"
                                                        required
                                                        value="statusPage"
                                                    />
                                                    <label className="form-check-label">
                                                        상태 페이지
                                                    </label>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">
                                                    Primary Base URL
                                                </label>
                                                <div className="input-group-mb-3">
                                                    <input
                                                        id="primaryBaseURL"
                                                        className="form-control"
                                                        name="primaryBaseURL"
                                                        placeholder="https://"
                                                        pattern="https?://.+"
                                                    />
                                                    <button
                                                        className="btn-btn-outline-primary"
                                                        type="button"
                                                    >
                                                        자동 Get
                                                    </button>
                                                </div>
                                                <div className="form-text"></div>
                                            </div>
                                            <div className="mb-4">
                                                <label className="form-label">
                                                    Steam API Key
                                                </label>
                                                <div
                                                    className="input-group-mb-3"
                                                    id="steamAPIKey"
                                                >
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        placeholder
                                                        maxLength="255"
                                                    />
                                                    <a className="btn-btn-outline-primary">
                                                        svg
                                                    </a>
                                                </div>
                                                <div className="form-text">
                                                    For monitoring a Steam Game
                                                    Server you need a Steam
                                                    Web-API key. You can
                                                    register your API key here:
                                                    <a
                                                        href="https://steamcommunity.com/dev"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                    >
                                                        https://steamcommunity.com/dev
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="mb-4">
                                                <h4 className="mt-4">
                                                    Monitor History
                                                </h4>
                                                <div className="mt2">
                                                    <label className="form-label">
                                                        Keep monitor history
                                                        data for 180 days.
                                                    </label>
                                                    <input
                                                        id="keepDataPeriodDays"
                                                        type="number"
                                                        className="form-control"
                                                        required
                                                        min="1"
                                                        step="1"
                                                        placeholder="180"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn-btn-primary"
                                                    type="submit"
                                                >
                                                    저장
                                                </button>
                                            </div>
                                        </form>
                                        <h2 className="mt-5-mb-2">
                                            비밀번호 변경
                                        </h2>
                                        <p className="font-1">
                                            "Current User: "
                                            <strong>hello</strong>
                                        </p>
                                        <form className="mb-3">
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    기존 비밀번호
                                                </label>
                                                <input
                                                    id="current-password"
                                                    type="password"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    새로운 비밀번호
                                                </label>
                                                <input
                                                    id="new-password"
                                                    type="password"
                                                    className="form-control"
                                                />
                                            </div>
                                            <div className="mb-3">
                                                <label className="form-label">
                                                    새로운 비밀번호 재입력
                                                </label>
                                                <input
                                                    id="repeat-new-password"
                                                    type="password"
                                                    className="form-control"
                                                />
                                                <div className="invalid-feedback">
                                                    비밀번호 재입력이 일치하지
                                                    않아요.
                                                </div>
                                            </div>
                                            <div>
                                                <button
                                                    className="btn-btn-primary"
                                                    type="submit"
                                                >
                                                    비밀번호 변경
                                                </button>
                                            </div>
                                        </form>
                                        <h2 className="mt-5-mb-2">고급</h2>
                                        <div className="mb-3">
                                            <button
                                                className="btn-btn-danger"
                                                onClick={logout}
                                            >
                                                로그아웃
                                            </button>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="notification-list">
                                            <h2 className="font-1">알림</h2>
                                            <p className="font-1">
                                                존재하지 않아요, 새로운 거 하나
                                                만드는 건 어떄요?
                                            </p>
                                            <ul className="list-group-mb-3"></ul>
                                            <button
                                                className="btn-btn-primary-me-2"
                                                type="button"
                                            >
                                                알림 설정
                                            </button>
                                        </div>
                                        <h2 className="mt-5">Info</h2>
                                        <h3 className="font-1">버전:1.10.2</h3>
                                        <br></br>
                                        <a
                                            href="https://github.com/louislam/uptime-kuma/releases"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            깃허브에서 업데이트 확인
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default withRouter(Settings);
