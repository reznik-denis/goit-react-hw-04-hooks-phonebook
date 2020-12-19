import React from 'react';
import PropTypes from 'prop-types';

function Filter({value, onChange}) {
    return (<label className="labelBlock">
        Find contacts by name <input type="text" value={value} onChange={onChange} className="inputStyles"/>
        </label>)
};

Filter.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Filter;