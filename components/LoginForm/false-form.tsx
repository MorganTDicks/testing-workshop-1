import React, { useState, ChangeEvent, FormEvent } from 'react';

interface LoginFormProps {
  onSubmit: (username: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (username && password ) {
      onSubmit(username);
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please Enter Username..."
        value={username}
        onChange={handleUsernameChange}
        aria-label="Username"
      />
      <input
        type="password"
        placeholder="Please Enter Password..."
        value={password}
        onChange={handlePasswordChange}
        aria-label="Password"
      />
      <button type="submit">Login</button>
      {error && <div>{error}</div>}
    </form>
  );
};

export default LoginForm;
