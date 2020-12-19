import './App.css';
import { Component } from 'react';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
import Filter from './Components/Filter';
import shortid from 'shortid';


const contacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
  contacts: contacts,
  filter: '',
  }

  formSubmitHendler = ({name, number}) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (this.state.contacts.find(cont => cont.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return
    }
    this.setState(({contacts}) => ({
      contacts: [contact, ...contacts]
    }));
  };

  deleteContact = idContact => {
    this.setState(({contacts}) => ({
      contacts: contacts.filter(contact => contact.id !== idContact)
    }));
  }

  chengeFilter = event => {
    this.setState({filter: event.currentTarget.value});
  }

  render() {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
    return (
    <div className="App">
      <h1>Phonebook</h1>
          <ContactForm onSubmit={this.formSubmitHendler}/>
      <h2>Contacts</h2>
        <Filter value={filter} onChange={this.chengeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
    </div>
  );
  }}

export default App;
