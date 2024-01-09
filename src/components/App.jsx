import { useEffect, useState } from 'react';
import { PhoneBookForm } from './PhoneBook/PhoneBookForm';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState([]);

  const handleAddForm = newContact => {
    const hasDublicate = contacts.some(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (hasDublicate) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
    // this.setState(prevState => ({
    //   contacts: [...prevState.contacts, newContact],
    // }));
  };

  const handleChangeFilter = event => {
    const value = event.target.value;
    setFilter(value);
  };

  const handleDeleteContact = id => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== id)
    );
  };

  useEffect(() => {
    const stringifiedContacts = localStorage.getItem('contacts');
    const contacts = JSON.parse(stringifiedContacts) ?? [];
    setContacts(contacts);
  }, []);

  // componentDidMount() {
  //   const stringifiedContacts = localStorage.getItem('contacts');
  //   const contacts = JSON.parse(stringifiedContacts) ?? [];
  //   this.setState({ contacts });
  // }

  useEffect(() => {
    const stringifiedContacts = JSON.stringify(contacts);
    localStorage.setItem('contacts', stringifiedContacts);
  }, [contacts]);

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState.contacts !== this.state.contacts) {
  //     const stringifiedContacts = JSON.stringify(this.state.contacts);
  //     localStorage.setItem('contacts', stringifiedContacts);
  //   }
  // }

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <PhoneBookForm handleAddForm={handleAddForm} />

      <h2>Contacts</h2>
      <Filter handleChangeFilter={handleChangeFilter} filterValue={filter} />
      <Contacts
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};
