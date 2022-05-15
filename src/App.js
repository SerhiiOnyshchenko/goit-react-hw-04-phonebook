import { useState, useEffect } from 'react';
import Filter from 'components/Filter/Filter';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';

const contactsList = [
   { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
   { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
   { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
   { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export default function App() {
   const [contacts, setContacts] = useState(contactsList);
   const [filterCont, setFilterCont] = useState('');
   const [isLocal, setIsLocal] = useState(false);

   useEffect(() => {
      console.log('efect 1');
      const contacts = JSON.parse(window.localStorage.getItem('contacts'));
      contacts && setContacts(contacts);
   }, []);
   useEffect(() => {
      if (isLocal && contacts) {
         console.log('efect 2');
         window.localStorage.setItem('contacts', JSON.stringify(contacts));
      }
   }, [isLocal, contacts]);

   const onSubmit = newContact => {
      setIsLocal(true);
      setContacts(prev => prev.push(newContact));
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

   let filterValue = filterCont.toLocaleLowerCase();
   let visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(filterValue)
   );
   return (
      <div className="main">
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
