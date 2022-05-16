import React from 'react';
import './index.css';

export default function Login() {
  return (
    <div
      className="login"
      onClick={() => {
        console.log('this is login');
      }}
    >
      login page
    </div>
  );
}
