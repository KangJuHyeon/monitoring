import '../scss/Details.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';

function Details() {
    return (
        <main>
            <div>
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
                        <div className="col-12-col-md-7-col-xl-8-mb-3">
                            <div className="Details_free">
                                <h1 className="font_Details_1">hello</h1>
                                <div className="tags"></div>
                                <p className="url">
                                    <a
                                        href="https://github.com/KangJuHyeon"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font_Details_2"
                                    >
                                        https://github.com/KangJuHyeon
                                    </a>
                                </p>
                                <div className="functions">
                                    <button className="btn-btn-light">
                                        <svg
                                            className="svg-inline--fa-fa-trash-fa-w-14"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="trash"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                className
                                                fill="currentColor"
                                                d="M 144 479 H 48 c -26.5 0 -48 -21.5 -48 -48 V 79 c 0 -26.5 21.5 -48 48 -48 h 96 c 26.5 0 48 21.5 48 48 v 352 c 0 26.5 -21.5 48 -48 48 Z m 304 -48 V 79 c 0 -26.5 -21.5 -48 -48 -48 h -96 c -26.5 0 -48 21.5 -48 48 v 352 c 0 26.5 21.5 48 48 48 h 96 c 26.5 0 48 -21.5 48 -48 Z"
                                            ></path>
                                        </svg>
                                        {' 일시정지'}
                                    </button>
                                    <a
                                        href="/edit/1"
                                        className="btn-btn-secondary"
                                    >
                                        <svg
                                            className="svg-inline--fa-fa-trash-fa-w-14"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="trash"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                className
                                                fill="currentColor"
                                                d="M 402.6 83.2 l 90.2 90.2 c 3.8 3.8 3.8 10 0 13.8 L 274.4 405.6 l -92.8 10.3 c -12.4 1.4 -22.9 -9.1 -21.5 -21.5 l 10.3 -92.8 L 388.8 83.2 c 3.8 -3.8 10 -3.8 13.8 0 Z m 162 -22.9 l -48.8 -48.8 c -15.2 -15.2 -39.9 -15.2 -55.2 0 l -35.4 35.4 c -3.8 3.8 -3.8 10 0 13.8 l 90.2 90.2 c 3.8 3.8 10 3.8 13.8 0 l 35.4 -35.4 c 15.2 -15.3 15.2 -40 0 -55.2 Z M 384 346.2 V 448 H 64 V 128 h 229.8 c 3.2 0 6.2 -1.3 8.5 -3.5 l 40 -40 c 7.6 -7.6 2.2 -20.5 -8.5 -20.5 H 48 C 21.5 64 0 85.5 0 112 v 352 c 0 26.5 21.5 48 48 48 h 352 c 26.5 0 48 -21.5 48 -48 V 306.2 c 0 -10.7 -12.9 -16 -20.5 -8.5 l -40 40 c -2.2 2.3 -3.5 5.3 -3.5 8.5 Z"
                                            ></path>
                                        </svg>
                                        {' 수정'}
                                    </a>
                                    <button className="btn-btn-danger">
                                        <svg
                                            className="svg-inline--fa-fa-trash-fa-w-14"
                                            aria-hidden="true"
                                            focusable="false"
                                            data-prefix="fas"
                                            data-icon="trash"
                                            role="img"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 448 512"
                                        >
                                            <path
                                                className
                                                fill="currentColor"
                                                d="M 432 32 H 312 l -9.4 -18.7 A 24 24 0 0 0 281.1 0 H 166.8 a 23.72 23.72 0 0 0 -21.4 13.3 L 136 32 H 16 A 16 16 0 0 0 0 48 v 32 a 16 16 0 0 0 16 16 h 416 a 16 16 0 0 0 16 -16 V 48 a 16 16 0 0 0 -16 -16 Z M 53.2 467 a 48 48 0 0 0 47.9 45 h 245.8 a 48 48 0 0 0 47.9 -45 L 416 128 H 32 Z"
                                            ></path>
                                        </svg>
                                        {' 삭제'}
                                    </button>
                                </div>
                                <div className="shadow-box">
                                    <div className="row">
                                        <div className="col-md-8">
                                            <div className="wrap">
                                                <div className="hp-bar-big">
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                    <div className="beat-empty"></div>
                                                </div>
                                                <span className="word">
                                                    60초마다 확인해요.
                                                </span>
                                            </div>
                                        </div>
                                        <div className="col-md-4-text-center">
                                            <span className="badge-rounded-pill-bg-primary">
                                                온라인
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shadow-box-big-padding-text-center-status">
                                    <div className="row">
                                        <div className="col">
                                            <h4 className="Details_font_h4">
                                                응답
                                            </h4>
                                            <p>(현재)</p>
                                            <span className="num">
                                                <a href="#" className="num">
                                                    <span>724</span>
                                                    <span>ms</span>
                                                </a>
                                            </span>
                                        </div>
                                        <div className="col">
                                            <h4 className="Details_font_h4">
                                                평균 응답
                                            </h4>
                                            <p>(24-시간)</p>
                                            <span className="num">
                                                <a href="#" className="num">
                                                    <span>816</span>
                                                    <span>ms</span>
                                                </a>
                                            </span>
                                        </div>
                                        <div className="col">
                                            <h4 className="Details_font_h4">
                                                업타임
                                            </h4>
                                            <p>(24-시간)</p>
                                            <span
                                                className="num"
                                                title="24-시간"
                                            >
                                                100%
                                            </span>
                                        </div>
                                        <div className="col">
                                            <h4 className="Details_font_h4">
                                                업타임
                                            </h4>
                                            <p>(30-일)</p>
                                            <span
                                                className="num"
                                                title="24-시간"
                                            >
                                                100%
                                            </span>
                                        </div>
                                        <div className="col">
                                            <h4 className="Details_font_h4">
                                                인증서 만료
                                            </h4>
                                            <p>
                                                <span>(2022-03-31)</span>
                                            </p>
                                            <span className="num">127 일</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="shadow-box-big-padding-text-center-ping-chart-wrapper">
                                    <div className="row">
                                        <div className="col">
                                            <div className="Details_pingchart">
                                                <div className="period-options">
                                                    <button
                                                        type="button"
                                                        className="btn-btn-light-dropdown-toggle-btn-period-toggle"
                                                        data-bs-toggle="dropdown"
                                                        aria-expanded="false"
                                                    >
                                                        Recent&nbsp;
                                                    </button>
                                                    <ul className="dropdown-menu-dropdown-menu-end">
                                                        <li>
                                                            <a
                                                                className="dropdown-item-active"
                                                                href="#"
                                                            >
                                                                Recent
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                3h
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                6h
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                24h
                                                            </a>
                                                        </li>
                                                        <li>
                                                            <a
                                                                className="dropdown-item"
                                                                href="#"
                                                            >
                                                                1w
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div className="chart-wrapper">
                                                    <div className="chart-flex">
                                                        <canvas
                                                            id="line-chart-a_IdJ9"
                                                            width="879"
                                                            height="500"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="shadow-box-table-shadow-box-Details">
                                    <div className="dropdown-dropdown-clear-data">
                                        <button
                                            className="btn-btn-sm-btn-outline-danger-dropdown-toggle"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                        >
                                            <svg
                                                className="svg-inline--fa-fa-trash-fa-w-14 "
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="trash"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 448 512"
                                            >
                                                <path
                                                    className
                                                    fill="currentColor"
                                                    d="M 432 32 H 312 l -9.4 -18.7 A 24 24 0 0 0 281.1 0 H 166.8 a 23.72 23.72 0 0 0 -21.4 13.3 L 136 32 H 16 A 16 16 0 0 0 0 48 v 32 a 16 16 0 0 0 16 16 h 416 a 16 16 0 0 0 16 -16 V 48 a 16 16 0 0 0 -16 -16 Z M 53.2 467 a 48 48 0 0 0 47.9 45 h 245.8 a 48 48 0 0 0 47.9 -45 L 416 128 H 32 Z"
                                                ></path>
                                            </svg>
                                            {' 데이터 삭제'}
                                        </button>
                                        <ul className="dropdown-menu-dropdown-menu-end">
                                            <li>
                                                <button
                                                    type="button"
                                                    className="dropdown-item"
                                                >
                                                    이벤트
                                                </button>
                                            </li>
                                            <li>
                                                <button
                                                    type="button"
                                                    className="dropdown-item"
                                                >
                                                    하트비트
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                    <table className="table-table-borderless-table-hover">
                                        <thead style={{ textAlign: 'start' }}>
                                            <tr>
                                                <th>상태</th>
                                                <th>날짜</th>
                                                <th>메시지</th>
                                            </tr>
                                        </thead>
                                        <tbody className="Details_tbody_style">
                                            <tr style={{ padding: '10px' }}>
                                                <td className="Details_td_style">
                                                    <span className="badge-rounded-pill-bg-primary_2">
                                                        온라인
                                                    </span>
                                                </td>
                                                <td>
                                                    <span className="border-0">
                                                        2021-11-24 16:40:04
                                                    </span>
                                                </td>
                                                <td className="border-0">
                                                    200 - OK
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    {/* <div className="d-flex-justify-content-center-kuma-pagination">
                                        <div className="ReactPagination">
                                            <nav>
                                                <ul className="ReactPagination_pagination">
                                                    <li className="ReactPagination__pagination__pagination">
                                                        <button
                                                            type="button"
                                                            className="page-link"
                                                            disabled
                                                        >
                                                            {'<'}
                                                        </button>
                                                    </li>
                                                    <li className="ReactPagination__pagination__pagination">
                                                        <button
                                                            type="button"
                                                            className="page-link-active"
                                                            disabled
                                                        >
                                                            1
                                                        </button>
                                                    </li>
                                                    <li className="ReactPagination__pagination__pagination">
                                                        <button
                                                            type="button"
                                                            className="page-link"
                                                            disabled
                                                        >
                                                            {'>'}
                                                        </button>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default withRouter(Details);
