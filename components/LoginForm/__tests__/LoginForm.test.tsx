// LoginForm.test.js (Ineffective Tests)
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import LoginForm from '@/components/LoginForm/login-form';
// import LoginForm from '@/components/LoginForm/false-form';

describe("Correcting ineffective Tests", ()=>{
    test('should render input fields and button', () => {
        const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(<LoginForm onSubmit={onSubmit}/>);
      expect(getByPlaceholderText('Username')).toBeInTheDocument();
      expect(getByPlaceholderText('Password')).toBeInTheDocument();
      expect(getByText('Login')).toBeInTheDocument();
    });
    
    test('should handle form submission', () => {
      const onSubmit = jest.fn();
      const { getByPlaceholderText, getByText } = render(<LoginForm onSubmit={onSubmit} />);
      const usernameInput = getByPlaceholderText('Username');
      const passwordInput = getByPlaceholderText('Password');
      const loginButton = getByText('Login');
    
      fireEvent.change(usernameInput, { target: { value: 'admin' } });
      fireEvent.change(passwordInput, { target: { value: 'password' } });
      fireEvent.click(loginButton);
    
      // Expect onSubmit to be called with correct username
      expect(onSubmit).toHaveBeenCalledWith('admin');
    });
    
      
})

