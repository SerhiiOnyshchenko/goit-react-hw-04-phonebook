import { useState, useEffect, useMemo } from 'react';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import s from 'App.module.css';

const contactsList = [
   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export default function App() {
   const [contacts, setContacts] = useState(
      () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsList
   );
   const [filterCont, setFilterCont] = useState('');

   useEffect(() => {
      localStorage.setItem('contacts', JSON.stringify(contacts));
   }, [contacts]);

   const onSubmit = newContact => {
      setContacts([...contacts, newContact]);
   };

   const checkNewContact = newContact => {
      if (
         contacts.find(
            contact =>
               contact.name.toLocaleLowerCase() ===
               newContact.name.toLocaleLowerCase()
         )
      ) {
         alert(newContact.name + ' is alredy in contacts');
         return true;
      }
      return false;
   };

   const deleteContact = id => {
      setContacts(prev => prev.filter(contact => contact.id !== id));
   };

   const changeFilter = e => setFilterCont(e.target.value);

   const visibleContacts = useMemo(() => {
      return contacts.filter(contact =>
         contact.name
            .toLocaleLowerCase()
            .includes(filterCont.toLocaleLowerCase())
      );
   }, [contacts, filterCont]);

   return (
      <div className={s.main}>
         <h1>Phonebook</h1>
         <ContactForm onSubmit={onSubmit} checkNewContact={checkNewContact} />
         <h2>Contacts</h2>
         <Filter filter={filterCont} onChange={changeFilter} />
         <ContactList
            visibleContacts={visibleContacts}
            deleteContact={deleteContact}
         />
      </div>
   );
}
