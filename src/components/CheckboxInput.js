import PropTypes from 'prop-types';

function CheckboxFilter({ label, checked = false, onChange = () => {} }) {
  return (
    <div>
      <label>
        <input type='checkbox' checked={checked} onChange={onChange}></input>
        {label}
      </label>
    </div>
  );
}

CheckboxFilter.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
};

export default CheckboxFilter;
