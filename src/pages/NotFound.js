import React from 'react';
import { withRouter } from 'react-router-dom';

function Notfound({ history }) {
    return (
        <div>
            <h1>주소가 올바르지 않습니다.</h1>
            <button
                onClick={() => {
                    history.push('/');
                }}
            >
                뒤로가기
            </button>
        </div>
    );
}

export default withRouter(Notfound);
