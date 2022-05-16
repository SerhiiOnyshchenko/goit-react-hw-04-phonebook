import PropTypes from 'prop-types';
import s from './ContactItem.module.css';
import sBtn from '../../../App.module.css';

export default function ContactItem({ id, name, number, deleteContact }) {
   return (
      <li className={s.item} id={id}>
         {name}: {number}
         <div className={sBtn.btn + ' ' + s.btn}>
            <button type="button" onClick={() => deleteContact(id)}>
               Delete
            </button>
         </div>
      </li>
   );
}
ContactItem.propType = {
   id: PropTypes.string.isRequired,
   name: PropTypes.string.isRequired,
   number: PropTypes.string.isRequired,
   deleteContact: PropTypes.func.isRequired,
};
