import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import rayrEmitter from './RayrEmitter';

function getStyleFn(ele, attr) {
    return window.getComputedStyle(ele, null)[attr];
}

class Box extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    render() {
        return (
            <div className="rayr-toggle-box">
                {this.props.children}
            </div>
        );
    }
}

class Top extends React.Component {

    render() {
        return (
            <div className="rayr-toggle-top">
                {this.props.children}
            </div>
        );
    }
}

class RayrToggle extends React.Component {

    static propTypes = {};

    static defaultProps = {};

    constructor() {
        super()
        this.oTop = null;
        this.oBox = null;
    }

    componentDidMount() {

        this.init();
        this.onEvents();
    }

    init() {

        this.oTop = this.refs.rayrToggle.children[0];
        this.oBox = this.refs.rayrToggle.children[1];

        document.addEventListener('click', () => {
            rayrEmitter.emit('click.rayr.hide.all');
        }, false);

        this.oTop.addEventListener('click', (e) => {
            e.stopPropagation();

            let _visiable = getStyleFn(this.oBox, 'display');

            rayrEmitter.emit('click.rayr.hide.all');

            if (_visiable === 'none') {
                this.oBox.style.display = 'block';
            }

        }, false);

        this.oBox.addEventListener('click', (e) => {
            e.stopPropagation();
            rayrEmitter.emit('click.rayr.hide.all');
        }, false);

        this.refs.rayrToggle.addEventListener('click', (e) => {
            e.stopPropagation();
        }, false);
    }

    onEvents() {

        rayrEmitter.on('click.rayr.hide.all', () => {
            this.oBox.style.display = 'none';
        });
    }

    render() {
        return (
            <div className="rayr-toggle" ref="rayrToggle">
                {this.props.children}
            </div>
        );
    }
}

RayrToggle.Box = Box;

RayrToggle.Top = Top;

export default RayrToggle;
