import { useState } from 'react';
import CheckboxFilter from './components/CheckboxInput';
import PasswordCopy from './components/PasswordCopy';
import RangeInput from './components/RangeInput';
import { canBeUnchecked, generateRandomPassword } from './utils';

import './App.scss';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState('10');
  const [options, setOptions] = useState({
    includeLowercase: true,
    includeUppercase: false,
    includeNumbers: false,
    includeSymbols: false,
  });

  const handleOptionChange = (e) => {
    // verify if at least one of the checkbox remains checked
    if (!e.target.checked && !canBeUnchecked(e.target.name, options)) return;

    setOptions((prevOptions) => ({
      ...prevOptions,
      [e.target.name]: e.target.checked,
    }));
  };

  const handleGeneratePassword = () => {
    const newPassword = generateRandomPassword(length, options);
    setPassword(newPassword);
  };

  return (
    <div className='App'>
      <div className='container'>
        <h2>Password Generator</h2>
        <PasswordCopy password={password} />
        <RangeInput
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />

        <CheckboxFilter
          label='Include Lowercase'
          name='includeLowercase'
          checked={options.includeLowercase}
          onChange={handleOptionChange}
        />

        <CheckboxFilter
          label='Include Uppercase'
          name='includeUppercase'
          checked={options.includeUppercase}
          onChange={handleOptionChange}
        />

        <CheckboxFilter
          label='Include Numbers'
          name='includeNumbers'
          checked={options.includeNumbers}
          onChange={handleOptionChange}
        />

        <CheckboxFilter
          label='Include Symbols'
          name='includeSymbols'
          checked={options.includeSymbols}
          onChange={handleOptionChange}
        />

        <button className='generate-button' onClick={handleGeneratePassword}>
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
