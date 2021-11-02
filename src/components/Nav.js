import '../scss/Nav.scss';
import React from 'react';
import { withRouter } from 'react-router-dom';

function Nav() {
    return (
        <header className="header">
            <a aria-current="page" href="/dashboard" className="active-link">
                <object
                    className="bi-me-2"
                    width="40"
                    height="40"
                    data="/angry-bird-icon.png"
                ></object>
                <span className="fs-4">Uptime Kuma</span>
            </a>
            <ul className="nav">
                <li className="nav-item-2">
                    <a
                        aria-current="page"
                        href="/status"
                        className="nav-link-2"
                    >
                        {'상태 페이지'}
                    </a>
                </li>
                <li className="nav-item-2">
                    <a
                        aria-current="page"
                        href="/dashboard"
                        className="active-link-router"
                    >
                        {'대시보드'}
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/settings" className="nav-link">
                        {'설정'}
                    </a>
                </li>
            </ul>
        </header>
    );
}

export default withRouter(Nav);
