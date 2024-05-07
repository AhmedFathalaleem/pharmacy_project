import React from 'react';
import '../AppTwo.css';
import LoginForm from '../components/LoginForm';
import RegistrationForm from '../components/RegistrationForm';

function LoginAndRegister(){

    return(
        <div className="App">
      <h1></h1>
      <LoginForm />
      <RegistrationForm />      
    </div>
    );

}

export default LoginAndRegister;