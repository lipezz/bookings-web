import React, { useState } from 'react';
import './App.css';
import api from './services/api';

import logo from './assets/logo.svg';

function App() {

  const [email, setEmail] = useState('');

  async function handleSubmit(event){
    event.preventDefault();
     
    const response = await api.post('/sessions', { email });
  }

  return (          
    <div className="container">
      <img src={logo} alt="Bookings" />

      <div className="content">
        <p>
          Ofereça <b>spots</b> para programadores e encontre <b>talentos</b> para sua empresa
        </p>

        <form onSubmit={handleSubmit}>
          <label htmlFor="email">E-MAIL *</label>
          <input 
            type="email" 
            id="email" 
            placeholder="Seu melhor email" 
            value={email}
            onChange={ event => setEmail(event.target.value) }
          />

          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
