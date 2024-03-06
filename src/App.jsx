import { useState } from 'react';
import ContactForm from './components/ContactForm/ContactForm';
import SearchBox from './components/SearchBox/SearchBox';
import ContactList from './components/ContactList/ContactList';
import { nanoid } from 'nanoid';
import './App.module.css';

const contactsData = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
]

function App() {
 const [contacts, setContacts] = useState(contactsData);
 const [searchText, setSearchText] = useState("");

 const onAddContactsBox = (contactsData) => {
    const finalContacts = {
      ...contactsData,
      id: nanoid(),
    }
    setContacts((prevState) => [...prevState, finalContacts]);
 }

 const filteredContacts = contacts.filter(contact => contact.name.toLowerCase()
 .includes(searchText.toLowerCase()))

  return (
    <>
    <h1>Phonebook</h1>
    <ContactForm onAddContactsBox={onAddContactsBox}/>
    <SearchBox searchText={searchText} setSearchText={setSearchText}/>
    <ContactList contacts={filteredContacts} searchText={searchText}/>  
    </>
  )
}

export default App
