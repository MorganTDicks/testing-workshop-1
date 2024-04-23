import React, { ReactNode, MouseEvent } from 'react';

interface ButtonProps {
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  children: ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, disabled = false, children }) => {
  return (
    <button onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
