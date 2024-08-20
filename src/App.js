import { useState } from 'react';
import './App.scss';
import CheckboxFilter from './components/CheckboxInput';
import RangeInput from './components/RangeInput';
import { generateRandomPassword } from './utils';
import PasswordCopy from './components/PasswordCopy';

function App() {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(10);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);

  return (
    <div className='App'>
      <div className='container'>
        <h2>Password Generator</h2>
        <PasswordCopy password={password} />
        <RangeInput
          value={length}
          onChange={(e) => {
            setLength(e.target.value);
          }}
        />
        <CheckboxFilter
          label='Include Lowercase'
          checked={includeLowercase}
          onChange={(e) => {
            if (
              !e.target.checked &&
              !includeUppercase &&
              !includeNumbers &&
              !includeSymbols
            )
              return;
            setIncludeLowercase(e.target.checked);
          }}
        />
        <CheckboxFilter
          label='Include Uppercase'
          checked={includeUppercase}
          onChange={(e) => {
            if (
              !e.target.checked &&
              !includeLowercase &&
              !includeNumbers &&
              !includeSymbols
            )
              return;
            setIncludeUppercase(e.target.checked);
          }}
        />
        <CheckboxFilter
          label='Include Numbers'
          checked={includeNumbers}
          onChange={(e) => {
            if (
              !e.target.checked &&
              !includeUppercase &&
              !includeLowercase &&
              !includeSymbols
            )
              return;
            setIncludeNumbers(e.target.checked);
          }}
        />
        <CheckboxFilter
          label='Include Symbols'
          checked={includeSymbols}
          onChange={(e) => {
            if (
              !e.target.checked &&
              !includeUppercase &&
              !includeNumbers &&
              !includeLowercase
            )
              return;
            setIncludeSymbols(e.target.checked);
          }}
        />
        <button
          className='generate-button'
          onClick={() => {
            const password = generateRandomPassword(
              length,
              includeNumbers,
              includeUppercase,
              includeLowercase,
              includeSymbols
            );
            setPassword(password);
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}

export default App;
