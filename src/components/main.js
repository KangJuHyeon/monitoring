import '../scss/main.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';

function main() {
    return (
        <main className="main-form">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12-left">
                        <div>
                            <a href="/add" className="btn-add">
                                <object
                                    width="14"
                                    height="16"
                                    data="/add.png"
                                ></object>
                                {'새로운 모니터링 추가하기'}
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
                                        className="form-control"
                                        placeholder="검색..."
                                    ></input>
                                </div>
                            </div>
                            <div className="monitor-list">
                                <div className="text-center">
                                    {'모니터링이 없어요.'}
                                    <a href="/add">{'하나 추가해봐요'}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12-right">
                        <div>
                            <h1 className="mb-3">{'간단한 정보'}</h1>
                            <div className="shadow-box-bigpadding">
                                <div className="row-a">
                                    <div className="col">
                                        <h3>{'온라인'}</h3>
                                        <span className="num">0</span>
                                    </div>
                                    <div className="col">
                                        <h3>{'오프라인'}</h3>
                                        <span className="num-text-danger">
                                            0
                                        </span>
                                    </div>
                                    <div className="col">
                                        <h3>{'알 수 없음'}</h3>
                                        <span className="num-text-secondary">
                                            0
                                        </span>
                                    </div>
                                    <div className="col">
                                        <h3>{'일시 정지'}</h3>
                                        <span className="num-text-secondary">
                                            0
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="shadow-box-table-shadow-box">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th>{'이름'}</th>
                                            <th>{'상태'}</th>
                                            <th>{'날짜'}</th>
                                            <th>{'메시지'}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan="4">
                                                {'중요 이벤트 없음'}
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div className="d-flex">
                                    <div className="ReactPagination">
                                        <nav>
                                            <ul className="ReactPagination__pagination">
                                                <li className="ReactPagination__pagination_item">
                                                    <button
                                                        type="button"
                                                        className="page-link"
                                                        disabled
                                                    >
                                                        {'<'}
                                                    </button>
                                                </li>
                                                <li className="ReactPagination__pagination_item">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default withRouter(main);
