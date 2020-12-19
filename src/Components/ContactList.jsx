import React from 'react';
import ButtonDelete from './ButtonDelete';
import PropTypes from 'prop-types';

function ContactList({contacts, onDeleteContact}) {
    return (<ul className="list">
            {contacts.map(({id, name, number}) => (
              <li key={id} className="listItem">{name}: {number}
                    <ButtonDelete onDeleteContact={onDeleteContact} id={id}/>
              </li>
              ))}
          </ul>)
}

ContactList.propTypes = {
    contacts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
    }))
}

export default ContactList;