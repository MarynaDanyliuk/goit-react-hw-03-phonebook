import React from 'react';
import css from './App.module.css';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  formSubmitHandler = ({ name, number }) => {
    // console.log({ name, number });
    const id = nanoid();
    const contactsList = [...this.state.contacts];

    if (
      contactsList.findIndex(
        contact => name.toLowerCase() === contact.name.toLowerCase()
      ) !== -1
    ) {
      alert(`${name} is alredy in contacts!`);
    } else {
      contactsList.push({ id, name, number });
    }
    // console.log(contactsList);
    this.setState({
      contacts: contactsList,
    });
  };

  handleNameFilter = event => {
    const filterList = this.state.contacts.filter(contact => {
      return contact.name
        .toLowerCase()
        .includes(this.state.filter.toLowerCase());
    });
    return filterList;
  };

  handleDelete = event => {
    const id = event.currentTarget.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: `column`,
          marginLeft: 40,
          fontSize: 20,
          color: '#010101',
        }}
      >
        <h1 className={css.title}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />
        <h2 className={css.title}>Contacts</h2>
        <Filter filter={this.state.filter} handleFilter={this.handleChange} />
        {/* <ContactsList contacts={this.state.contacts} /> */}
        <ContactsList
          contacts={this.handleNameFilter()}
          handleDelete={this.handleDelete}
        />
      </div>
    );
  }
}

// App.propTypes = {
//   title: PropTypes.string,
// };
