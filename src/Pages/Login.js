import React from 'react'
import styled from 'styled-components'

function Login() {
  return (
    //instagram login page
    <LoginContainer>
      <LoginContain>
        <head>
          <meta charset="UTF-8" />
          <title>Login • Instagram</title>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/5.0.0/normalize.min.css"></link>
          <link rel="stylesheet" href="style.css"></link>
          <link rel="shortcut icon" type="image/x-icon" href="./favicon.ico"></link>
          <script src="https://cdnjs.cloudflare.com/ajax/libs/prefixfree/1.0.7/prefixfree.min.js"></script>
        </head>
        <div calss='login'>
          <h1><img src="https://i.imgur.com/wvLiKam.png" width="200px" height="68px" alt=""/></h1>
          <form action="" method="POST">
            <input placeholder="Phone number, username, or email" type="text" name="username" />
            <input placeholder="Password" type="password" name="password" />
            <input type="submit" value="Log In" /><br />
          </form>
        </div>
        <div class="divider"><b>OR</b></div>
        <div class="forgotwrapper">
          <div class="fb"><a href="https://facebook.com"><img src="https://i.imgur.com/exksovo.png" alt=''/> Log in with Facebook</a></div>
        </div>
        <div class="infobox">

          <p>Don't have an account? <a href="https://instagram.com">Sign up</a></p>

        </div>
        <div class='apps'>
          <p>Get the app.</p>
          <span><a href="https://apps.apple.com/app/instagram/id389801252?vt=lo"><img src="https://i.imgur.com/lREV6Qa.png" height="45px" width="153px" alt='' /></a><a href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=utm_source%3Dinstagramweb%26utm_campaign%3DloginPage%26ig_mid%3DXRR9_gALAAHKOzMSO3MkAOZ0JJtC%26utm_content%3Dlo%26utm_medium%3Dbadge"><img src="https://i.imgur.com/DFQNKXK.png" height="45" width="151px" alt='' /></a></span>
        </div>
        <div class="footer">
          <p>
            <a href="https://www.instagram.com/about/us/">ABOUT US</a>
            <a href="https://help.instagram.com/">SUPPORT</a>
            <a href="https://instagram-press.com/">PRESS</a>
            <a href="https://www.instagram.com/developer/">API</a>
            <a href="https://www.instagram.com/about/jobs/">JOBS</a>
            <a href="https://help.instagram.com/519522125107875">PRIVACY</a>
            <a href="https://help.instagram.com/581066165581870">TERMS</a>
            <a href="https://www.instagram.com/explore/locations/">DIRECTORY</a>
            <a href="https://www.instagram.com/directory/profiles/">PROFILES</a>
            <a href="https://www.instagram.com/directory/hashtags/">HASHTAGS</a>
            <a href="">LANGUAGE</a>
            <span>© 2019 INSTAGRAM</span>
          </p>
        </div>
        <script src='http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
      </LoginContain>
    </LoginContainer>
  )
}

export default Login

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #fafafa;
`

const LoginContain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  border: 1px solid lightgray;
  border-radius: 1px;
  width: 350px;
  height: 400px;
  .login {
    background: #fff;
    border: 1px solid rgb(236, 234, 234);
    border-radius: 0px;
    height: 410px;
    margin: 30px auto 0;
    width: 400px;
  }
  .login h1 {
    box-sizing: border-box;
    margin: 20px 0 30px 0;
    text-align: center;
    user-select: none;
  }
  input[type="password"],
  input[type="text"] {
    background: rgba(250, 250, 250, 1);
    border: 1px solid rgb(236, 234, 234);
    border-radius: 3px;
    box-shadow: 0 1px #fff;
    box-sizing: border-box;
    color: black;
    height: 39px;
    margin: 10px 0 0 20px;
    padding: 10px;
    font-size: 13px;
    width: 320px;
  }
  input[type="password"]::placeholder,
  input[type="text"]::placeholder {
    color: rgb(165, 164, 164);
  }
  input[type="password"]:focus,
  input[type="text"]:focus {
    outline: 0;
    border: 1px solid #a1a1a1;
  }
  
  .forgot {
    color: #7f7f7f;
    display: inline-block;
    box-sizing: border-box;
    font: 12px/1 sans-serif;
    left: -19px;
    position: relative;
    text-decoration: none;
    top: -15px;
    transition: color 0.4s;
  }
  .forgot:hover {
    color: #3b3b3b;
  }
  
  input[type="submit"] {
    background: #3897f0;
    border: 0px;
    border-radius: 4px;
    box-sizing: border-box;
    color: #f8f8f8;
    font-weight: 600;
    height: 29px;
    margin: 14px 0 0 20px;
    width: 320px;
  }
  input[type="submit"]:hover,
  input[type="submit"]:focus {
    background: rgb(48, 144, 233);
    outline: 0;
  }
  
  .divider {
    overflow: hidden;
    text-align: center;
    box-sizing: border-box;
    color: rgb(165, 164, 164);
    font-size: 13.5px;
    font-weight: 500;
    margin: 20px 0 0 40px;
    width: 320px;
  }
  
  .divider:before,
  .divider:after {
    background-color: rgb(224, 221, 221);
    content: "";
    display: inline-block;
    height: 1.2px;
    position: relative;
    vertical-align: middle;
    width: 50%;
  }
  
  .divider:before {
    right: 2em;
    margin-left: -50%;
  }
  
  .divider:after {
    left: 2em;
    margin-right: -50%;
  }
  
  .fbwrapper {
    text-align: center;
    margin-top: 25px;
  }
  
  .fb a {
    font-weight: 600;
    font-size: 14px;
    display: inline;
    vertical-align: middle;
    margin: 20px 0 0 10px;
    text-decoration: none;
    color: rgb(107, 106, 106);
  }
  .fb img {
    vertical-align: middle;
  }
  
  .forgotwrapper {
    text-align: center;
    margin-top: 35px;
  }
  
  .forgot a {
    margin: 20px 0 0 40px;
    text-decoration: none;
    color: rgb(107, 106, 106);
  }
  
  .infobox {
    background: #fff;
    border: 1px solid rgb(236, 234, 234);
    border-radius: 0px;
    height: 60px;
    margin: 10px auto 0;
    width: 400px;
  }
  .infobox p {
    box-sizing: border-box;
    margin: 22px 30px 30px 0;
    text-align: center;
    user-select: none;
    font-size: 14px;
  }
  
  .infobox p a {
    color: rgb(94, 163, 243);
    text-decoration: none;
    font-weight: 600;
  }
  
  .apps {
    height: 100px;
    margin: 20px auto 0;
    width: 400px;
  }
  
  .apps p {
    box-sizing: border-box;
    margin: 0px 40px 30px 0px;
    text-align: center;
    user-select: none;
    font-size: 14px;
  }
  
  .apps span a {
    box-sizing: border-box;
    margin-left: 18px;
  }
  
  .app span a img {
    padding-left: 20px;
  }
  
  .footer {
    position: relative;
    left: 0;
    bottom: 0;
    margin-top: 50px;
    width: 100%;
    text-align: center;
  }
  
  .footer p a {
    color: #003569;
    text-decoration: none;
    padding-left: 10px;
    font-size: 13px;
  }
  
  .footer p span {
    color: rgb(189, 186, 186);
    padding-left: 80px;
    font-size: 13px;
  }
`  