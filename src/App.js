import './App.css';
import { useState, useEffect } from 'react';
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

function App() {
  const [userContact, setUserContact] = useState(contacts);
  const [filter, setFilter] = useState('');

  const formSubmitHendler = ({ name, number }) => {
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    if (userContact.find(cont => cont.name === contact.name)) {
      alert(`${contact.name} is already in contacts`);
      return
    };
    setUserContact(state => [...state, contact]);
  };

  const deleteContact = idContact => {
    setUserContact(state => state.filter(contact => contact.id !== idContact));
  };

  const chengeFilter = event => {
    setFilter(event.currentTarget.value);
  };

  useEffect(() => {
    const contacts = localStorage.getItem('contacts');
    const parseContacts = JSON.parse(contacts);
    if (parseContacts) {
      setUserContact(parseContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(userContact))
  }, [userContact]
  );

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = userContact.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));
  
  return (<div className="App">
      <h1>Phonebook</h1>
          <ContactForm onSubmit={formSubmitHendler}/>
      <h2>Contacts</h2>
        <Filter value={filter} onChange={chengeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={deleteContact}/>
    </div>
  );
};

export default App;
