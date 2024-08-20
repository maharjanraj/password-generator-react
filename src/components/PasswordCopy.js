import { useState } from 'react';

function PasswordCopy({ password = '' }) {
  const [text, setText] = useState('Click to copy');

  return (
    <div className='password-input__container'>
      <input id='password-input' value={password} type='text' disabled></input>
      <div className='tooltip'>
        <span className='tooltip-text'>{text}</span>
        {password && (
          <img
            className='password-input__img'
            src={process.env.PUBLIC_URL + '/copy.svg'}
            alt='copy'
            onMouseLeave={() => setText('Click to copy')}
            onClick={() => {
              navigator.clipboard
                .writeText(password)
                .then(() => {
                  setText('Copied!');
                })
                .catch((err) => {
                  alert('Failed to copy text');
                  console.error(err);
                });
            }}
          />
        )}
      </div>
    </div>
  );
}

export default PasswordCopy;
