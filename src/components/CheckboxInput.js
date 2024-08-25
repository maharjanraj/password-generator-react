import PropTypes from 'prop-types';

function CheckboxFilter({ name, label, checked = false, onChange = () => {} }) {
  return (
    <div>
      <label>
        <input id={name} name={name} type='checkbox' checked={checked} onChange={onChange}></input>
        {label}
      </label>
    </div>
  );
}

CheckboxFilter.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckboxFilter;
