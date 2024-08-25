import PropTypes from 'prop-types';

const RangeInput = ({value = 10, onChange = () => {}}) => {
  return (
    <div>
      <p>Character length: {value}</p>
      <input
        type="range"
        min="5"
        max="32"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

RangeInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func
}

export default RangeInput;
