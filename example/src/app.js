import 'react-rayr-toggle/src/RayrToggle.scss';

import './demo.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrToggle} from 'react-rayr-toggle';

function App() {
    return (
        <div className="demo">
            <h1>组件初始化</h1>
            <RayrToggle>
                <RayrToggle.Top>我是标题</RayrToggle.Top>
                <RayrToggle.Box>我是主体我是主体我是主体我是主体我是主体</RayrToggle.Box>
            </RayrToggle>
            <RayrToggle>
                <RayrToggle.Top>我是标题</RayrToggle.Top>
                <RayrToggle.Box>我是主体我是主体我是主体我是主体我是主体</RayrToggle.Box>
            </RayrToggle>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
