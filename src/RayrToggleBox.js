/**
 * Created by Rayr Lee on 2018/4/19.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrToggleBox extends React.Component {

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

export default RayrToggleBox;

