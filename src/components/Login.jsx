import React, { useState } from 'react';
import styled from 'styled-components';

const LoginContainer = styled.div`
  display: flex;
  flex-direction:column-reverse;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  margin-top: 10%;
  @media (min-width: 800px) {
    /* Media query for screens with a minimum width of 769px (larger screens) */
    flex-direction: row;
  }
`;

const LoginForm = styled.form`
 width: 90%; /* Increase the width for smaller screens */
  max-width: 400px;
  padding: 20px;
  background-color: transparent;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;

const Input = styled.input`
  width: 92%;
  height: 40px;
  font-size:16px;
  margin: 2% 0;
  padding: 1%;
  border:none;
  border-bottom: 2px solid gray;
  color:#211f1f;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  padding:1%;
`;

const CheckboxInput = styled.input`
  margin-right:1.5%;
`;

const SubmitButton = styled.button`
  width: 90%;
  height: 40px;
  background-color: #449c96;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin: 5% 4% auto 4%;
  font-size:16px;
  &:hover{
    background-color:#2a8f96;
  }
`;
 


function Login() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isChecked) {
      alert('Your form has been submitted!');
      handleCheckboxChange();
      e.target.reset();


    } else {
      alert('Please accept the terms and conditions.');
    }
  };

  return (
    <div id="form"> 
    
    <LoginContainer className='form'>
    <img src='https://media.istockphoto.com/id/1363841854/vector/woman-with-laptop-working-in-internet.jpg?s=612x612&w=0&k=20&c=FkuGR7Zq3lvuowtLn32Z7pkAHUnp9M2xtNuq75MRu4U=' />
      <LoginForm onSubmit={handleSubmit}>
        <h2 style={{color:"#449c96"}}>Welcome at Aimed Labs!</h2>
        <Input type="text" placeholder="Username " required />
        <Input type="password" placeholder="Password" required/>
        <CheckboxLabel>
          <CheckboxInput
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />
          I accept the terms and conditions
        </CheckboxLabel>
        <SubmitButton  type="submit">Login</SubmitButton>
        <h5 style={{color:"gray" , textAlign:'center'}}> or </h5>
        <a href="/">
        <h4 style={{color:"#65ada9" , textDecoration:"underline #449c96" ,  textAlign:'center'}}> Sign in as a new user.</h4> </a>
      </LoginForm>
    </LoginContainer>
    </div> 
  );
}

export default Login;
