import PropTypes from 'prop-types';
import s from './Filter.module.css';

export default function Filter({ filter, onChange }) {
   console.log('filter');
   return (
      <label className={s.label}>
         Find contact by name
         <input
            type="text"
            name="filter"
            placeholder="Enter some letters to search"
            value={filter}
            onChange={onChange}
         />
      </label>
   );
}

Filter.propTypes = {
   filter: PropTypes.string.isRequired,
   onChange: PropTypes.func.isRequired,
};
