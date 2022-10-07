import React from 'react'
import styled from 'styled-components'

function Register() {
  return (
    //Instagram register page

    <RegisterContainer>
      <RegisterContain>
        <img
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png'
          alt=''
        />
        <input type='text' placeholder='Username' />
        <input type='text' placeholder='Full Name' />
        <input type='password' placeholder='Password' />
        <button>Sign Up</button>
      </RegisterContain>
    </RegisterContainer>
  )
}

export default Register

const RegisterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fafafa;
`

const RegisterContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 1px;
  width: 350px;
  height: 500px;

  img {
    width: 175px;
    height: 51px;
    margin: 20px 0;
  }

  input {
    width: 250px;
    height: 35px;
    border: 1px solid lightgray;
    border-radius: 3px;
    margin: 5px 0;
    padding: 0 10px;
  }

  button {
    width: 250px;
    height: 30px;
    border: none;
    border-radius: 3px;
    background-color: #0095f6;
    color: white;
    font-weight: 600;
  }
`
