import PropTypes from 'prop-types';
import ContactItem from './ContactItem/ContactItem';
import s from './ContactList.module.css';

export default function ContactList({ visibleContacts, deleteContact }) {
   return (
      <ul className={s.list}>
         {visibleContacts.map(({ id, name, number }) => (
            <ContactItem
               key={id}
               id={id}
               name={name}
               number={number}
               deleteContact={deleteContact}
            />
         ))}
      </ul>
   );
}

ContactList.propTypes = {
   visibleContacts: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string.isRequired,
         name: PropTypes.string.isRequired,
         number: PropTypes.string.isRequired,
      })
   ),
   deleteContact: PropTypes.func.isRequired,
};
