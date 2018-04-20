import 'react-rayr-toggle/src/RayrToggle.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrToggle, RayrToggleBox, RayrToggleTop} from 'react-rayr-toggle';

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <RayrToggle>
                <RayrToggleTop>我是标题</RayrToggleTop>
                <RayrToggleBox>我是主体我是主体我是主体我是主体我是主体</RayrToggleBox>
            </RayrToggle>
            <RayrToggle>
                <RayrToggleTop>我是标题</RayrToggleTop>
                <RayrToggleBox>我是主体我是主体我是主体我是主体我是主体</RayrToggleBox>
            </RayrToggle>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
