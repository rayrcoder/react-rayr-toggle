import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {EventEmitter} from 'events';

const rayrEmitter = new EventEmitter();

function getStyleFn(ele, attr) {
    return window.getComputedStyle(ele, null)[attr];
}

class Box extends React.Component {
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

    static propTypes = {
        className: PropTypes.string
    };

    static defaultProps = {
        className: ''
    };

    constructor() {
        super()
        this.oTop = null;
        this.oBox = null;
        this.oPar = null;
    }

    componentDidMount() {
        this.init();
    }

    init() {

        this.oTop = this.refs.rayrToggle.children[0];
        this.oBox = this.refs.rayrToggle.children[1];

        document.addEventListener('click', () => {
            console.log('document');
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
            if (e.target === this.oBox) {
                rayrEmitter.emit('click.rayr.hide.all');
            }
        }, false);

        rayrEmitter.on('click.rayr.hide.all', () => {
            this.oBox.style.display = 'none';
        });
    }

    render() {
        return (
            <div {...this.props} className={`rayr-toggle ${this.props.className}`} ref="rayrToggle">
                {this.props.children}
            </div>
        );
    }
}

RayrToggle.Box = Box;

RayrToggle.Top = Top;

export default RayrToggle;
