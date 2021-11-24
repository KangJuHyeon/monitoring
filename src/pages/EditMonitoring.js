import '../scss/EditMonitoring.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';

function EditMonitoring({ isLogin, history }) {
    if (isLogin === false) {
        alert('인증 정보가 없습니다.');
        history.push('/login');
    }

    if (!localStorage.Authorization) {
        alert('인증 정보가 없습니다.');
        history.push('/login');
    }

    return (
        <main className="main-form-add">
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
                                        className="form-control-add"
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
                    {/* 오른쪽 div 시작 */}
                    <div className="col-12-col-md-7-right">
                        <div>
                            <h1 className="mb-3">새로운 모니터링 추가하기</h1>
                            <form>
                                <div className="shadow-box">
                                    <div className="row">
                                        {/* div 2개 왼쪽 오른쪽 시작*/}
                                        <div className="col-md-6-add">
                                            <h2 className="mb-2">일반</h2>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="type"
                                                    className="form-label"
                                                >
                                                    모니터링 종류
                                                </label>
                                                <select
                                                    id="type"
                                                    className="form-select"
                                                >
                                                    <option value="http">
                                                        HTTP(s)
                                                    </option>
                                                    <option value="port">
                                                        TCP Port
                                                    </option>
                                                    <option value="ping">
                                                        Ping
                                                    </option>
                                                    <option value="keyword">
                                                        HTTP(s) - 키워드
                                                    </option>
                                                    <option value="dns">
                                                        DNS
                                                    </option>
                                                    <option value="push">
                                                        Push
                                                    </option>
                                                    <option value="steam">
                                                        Steam Game Server
                                                    </option>
                                                </select>
                                            </div>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="name"
                                                    className="form-label"
                                                >
                                                    이름
                                                </label>
                                                <input
                                                    id="name"
                                                    type="text"
                                                    className="form-control-add"
                                                />
                                            </div>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="url"
                                                    className="form-label"
                                                >
                                                    URL
                                                </label>
                                                <input
                                                    id="url"
                                                    type="url"
                                                    className="form-control-add"
                                                    placeholder="https://"
                                                />
                                            </div>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="interval"
                                                    className="form-label"
                                                >
                                                    하트비트 주기 (60초마다
                                                    확인해요.)
                                                </label>
                                                <input
                                                    id="interval"
                                                    type="number"
                                                    className="form-control-add"
                                                    placeholder="60"
                                                    required
                                                    min="20"
                                                    step="1"
                                                />
                                            </div>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="maxRetries"
                                                    className="form-label-add"
                                                >
                                                    재시도
                                                </label>
                                                <input
                                                    id="maxRetries"
                                                    type="number"
                                                    className="form-control-add"
                                                    required
                                                    min="0"
                                                    step="1"
                                                />
                                                <div className="form-text-add">
                                                    서비스가 중단된 후 알림을
                                                    보내기 전 최대 재시도 횟수
                                                </div>
                                            </div>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="retry-interval"
                                                    className="form-label"
                                                >
                                                    하트비트 재시도 주기
                                                </label>
                                                <input
                                                    id="retry-interval"
                                                    type="number"
                                                    className="form-control-add"
                                                    required
                                                    min="20"
                                                    step="1"
                                                />
                                            </div>
                                            <h2 className="mt-5-mb-2">고급</h2>
                                            <div className="my-3-form-check">
                                                <input
                                                    id="ignore-tls"
                                                    className="form-check-input"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="form-check-label-add"
                                                    htmlFor="ignore-tls"
                                                >
                                                    HTTPS 웹사이트에서 TLS/SSL
                                                    에러 무시하기
                                                </label>
                                            </div>
                                            <div className="my-3-form-check">
                                                <input
                                                    id="upside-down"
                                                    className="form-check-input"
                                                    type="checkbox"
                                                />
                                                <label
                                                    className="form-check-label-add"
                                                    htmlFor="upside-down"
                                                >
                                                    상태 반전 모드
                                                </label>
                                                <div className="form-text-add">
                                                    서버 상태를 반대로 표시해요.
                                                    서버가 작동하면 오프라인으로
                                                    표시할 거예요.
                                                </div>
                                            </div>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="maxRedirects"
                                                    className="form-label-add"
                                                >
                                                    최대 리다이렉트
                                                </label>
                                                <input
                                                    id="maxRedirects"
                                                    className="form-control-add"
                                                    type="number"
                                                    required
                                                    min="0"
                                                    step="1"
                                                />
                                                <div className="form-text-add">
                                                    최대 리다이렉트 횟수예요.
                                                    0을 입력하면 리다이렉트를
                                                    꺼요.
                                                </div>
                                            </div>
                                            <div className="form-text-add">
                                                응답 성공으로 간주할 상태 코드를
                                                정해요.
                                            </div>
                                            <div className="mt-5-mb-1">
                                                <button
                                                    className="btn-btn-primary"
                                                    type="submit"
                                                >
                                                    저장
                                                </button>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <h2 className="mb-2">알림</h2>
                                            <p className="font-1">
                                                존재하지 않아요, 새로운 거 하나
                                                만드는 건 어때요?
                                            </p>
                                            <button
                                                className="btn-btn-primary-me-2"
                                                type="button"
                                            >
                                                알림 설정
                                            </button>
                                            <h2 className="mt-5-mb-2">
                                                HTTP Options
                                            </h2>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="method"
                                                    className="form-label"
                                                >
                                                    Method
                                                </label>
                                                <select
                                                    id="method"
                                                    className="form-select"
                                                >
                                                    <option>GET</option>
                                                    <option>POST</option>
                                                    <option>PUT</option>
                                                    <option>PATCH</option>
                                                    <option>DELETE</option>
                                                    <option>HEAD</option>
                                                    <option>OPTIONS</option>
                                                </select>
                                            </div>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="body"
                                                    className="form-label"
                                                >
                                                    Body
                                                </label>
                                                <textarea
                                                    id="body"
                                                    className="form-control-add"
                                                    placeholder="Example:"
                                                ></textarea>
                                            </div>
                                            <div className="my-3">
                                                <label
                                                    htmlFor="headers"
                                                    className="form-label"
                                                >
                                                    Headers
                                                </label>
                                                <textarea
                                                    id="headers"
                                                    className="form-control-add"
                                                    placeholder="Example:"
                                                ></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default withRouter(EditMonitoring);
