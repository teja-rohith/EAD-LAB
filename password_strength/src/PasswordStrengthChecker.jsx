import React, { useState } from 'react';
const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');
  const checkPasswordStrength = (password) => {
    let strengthScore = 0;
    if (password.length >= 8) strengthScore += 1;
    if (/[a-z]/.test(password)) strengthScore += 1;
    if (/[A-Z]/.test(password)) strengthScore += 1;
    if (/\d/.test(password)) strengthScore += 1;
    if (/[^A-Za-z0-9]/.test(password)) strengthScore += 1;
    if (strengthScore === 0) setStrength('Weak');
    if (strengthScore === 1) setStrength('Moderate');
    if (strengthScore === 2) setStrength('Strong');
    if (strengthScore === 3) setStrength('Very Strong');
    if (strengthScore === 4) setStrength('Excellent');
  };
  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h3>Password Strength Checker</h3>
      <input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Enter your password"
        style={{ padding: '10px', marginBottom: '10px', width: '300px' }}
      />
      <div>
        <strong>Password Strength: </strong>
        <span style={{ fontWeight: 'bold', color: strength === 'Weak' ? 'red' : strength === 'Moderate' ? 'orange' : strength === 'Strong' ? 'green' : 'blue' }}>
          {strength}
        </span>
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
