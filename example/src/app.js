import 'react-rayr-toggle/src/RayrToggle.scss';

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {RayrToggle} from 'react-rayr-toggle';

function App() {
    return (
        <div>
            <h1>组件初始化</h1>
            <RayrToggle/>
        </div>
    )
}

const run = () => {
    ReactDOM.render(<App/>, document.getElementById('app'));
};

window.addEventListener('DOMContentLoaded', run);
