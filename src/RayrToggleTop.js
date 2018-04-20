/**
 * Created by Rayr Lee on 2018/4/19.
 */

import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class RayrToggleTop extends React.Component {

    render() {
        return (
            <div className="rayr-toggle-top">
                {this.props.children}
            </div>
        );
    }
}

export default RayrToggleTop;
