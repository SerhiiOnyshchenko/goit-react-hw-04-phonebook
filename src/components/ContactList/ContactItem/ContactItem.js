import PropTypes from 'prop-types';
import s from './ContactItem.module.css';

export default function ContactItem({ id, name, number, deleteContact }) {
   return (
      <li className={s.item} id={id}>
         {name}: {number}
         <button
            className={s.btn}
            type="button"
            onClick={() => deleteContact(id)}
         >
            Delete
         </button>
      </li>
   );
}
ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   deleteContact: PropTypes.func.isRequired,
};
