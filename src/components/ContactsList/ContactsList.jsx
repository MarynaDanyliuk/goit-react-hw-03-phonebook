import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactsList.module.css';

export const ContactsList = ({ contacts, handleDelete }) => {
  // const{id, name,}=contacts
  // console.log(contacts);
  return (
    <div>
      <ul className={css[`contact-list`]}>
        {contacts.map(contact => (
          <li key={contact.id} className={css.contact}>
            {contact.name}: {contact.number}
            <button
              className={css.button}
              id={contact.id}
              type="button"
              onClick={handleDelete}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDelete: PropTypes.func.isRequired,
};
