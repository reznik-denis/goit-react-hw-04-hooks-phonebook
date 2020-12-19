import React from 'react';
import PropTypes from 'prop-types';

function Button({ onDeleteContact, id }) {
    return <button
        type="button"
        className="buttonDelete"
        onClick={() => onDeleteContact(id)}>Delete
    </button>
}

Button.propTypes = {
    onDeleteContact: PropTypes.func.isRequired, 
}

export default Button;