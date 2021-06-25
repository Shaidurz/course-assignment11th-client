import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import './login.css'

if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig); }
const Login = () => {
  const [newUser, setNewUser] = useState(false)
  const [userInfo, setUserInfo] = useState(
    {
      issigndIn: false,
      name: '',
      email: '',
      photo: '',
      password: '',
      error: '',
      success: false,
    }
  )

  const [loggedInUser, setLoggedInUser] = useContext(UserContext)

  const history = useHistory()
  const location = useLocation()
  let { from } = location.state || { from: { pathname: "/" } };
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleSigned = () => {
    firebase.auth().signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user
        console.log(displayName, email, photoURL)
        const signInuser = {
          issigndIn: true,
          name: displayName,
          email: email,
          photo: photoURL
        }
        setUserInfo(signInuser)
        setLoggedInUser(signInuser)
        history.replace(from);
        setToken()
      })
    return handleSigned;
  };
  const setToken = () => {
    firebase.auth().currentUser.getIdToken(true).then(function (idToken) {
      sessionStorage.setItem('token', idToken)
    }).catch(function (error) {
    });
  }
  const handleSignedOut = () => {
    console.log('className')
    firebase.auth().signOut().then(res => {
      const signOut = {
        issigndIn: false,
        name: '',
        email: '',
        photo: '',
      }
      setUserInfo(signOut)
    }).catch((error) => {

    });
  }
  const handleBlur = (e) => {
    let isFormvalid = true;
    if (e.target.name === 'email') {
      isFormvalid = /\S+@\S+\.\S+/.test(e.target.value)
    }
    if (e.target.name === 'password') {
      const passwordLength = e.target.value.length >= 8
      const regexPasswordValid = /[0-9]/.test(e.target.value);
      isFormvalid = regexPasswordValid && passwordLength
    }
    if (isFormvalid) {
      const updateUserInfo = { ...userInfo }
      updateUserInfo[e.target.name] = e.target.value
      setUserInfo(updateUserInfo)
    }
  }
  const handleSubmit = (e) => {
    if (newUser && userInfo.email && userInfo.password) {
      firebase.auth().createUserWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(res => {
          const updateUserInfo = { ...userInfo }
          updateUserInfo.photo = res.photoURL;
          updateUserInfo.error = '';
          updateUserInfo.success = true;
          setUserInfo(updateUserInfo)
          userInfoUpdate(userInfo.name, userInfo.photo)
        })
        .catch((error) => {
          const updateUserInfo = { ...userInfo }
          updateUserInfo.error = error.message;
          updateUserInfo.success = false;
          setUserInfo(updateUserInfo)
        });
      console.log('submit')
    }
    if (!newUser && userInfo.email && userInfo.password) {
      firebase.auth().signInWithEmailAndPassword(userInfo.email, userInfo.password)
        .then(res => {
          const updateUserInfo = { ...userInfo }
          updateUserInfo.error = '';
          updateUserInfo.success = true;
          setUserInfo(updateUserInfo)
          setLoggedInUser(updateUserInfo)
          history.replace(from);
          console.log(res.user)
        })
        .catch((error) => {
          const updateUserInfo = { ...userInfo }
          updateUserInfo.error = error.message;
          console.log(updateUserInfo.error)
          updateUserInfo.success = false;
          setUserInfo(updateUserInfo)
        });
    }
    e.preventDefault()
  }

  const userInfoUpdate = (name, photo) => {
    const user = firebase.auth().currentUser;
    user.updateProfile({
      displayName: name,
      photoURL: photo
    }).then(function () {
    }).catch(function (error) {
    });
  }
  return (
    <div className="container">
      <div style={{ textAlign: 'center' }}>
        {
          userInfo.issigndIn && <div className="info">
            <h3>name: {userInfo.name}</h3>
            <h3>email: {userInfo.email}</h3>
            <img src={userInfo.photo} alt='info'></img>
          </div>
        }
        <div className="login-form">
          <h2>Sign up Form</h2>
          <form onSubmit={handleSubmit}>
            {newUser && <div className="form-group"><input className="form-control" type="text" name="name" placeholder="Enter your name" onBlur={handleBlur} required></input></div>}
            <br></br>
            <input className="form-control" type="email" name="email" placeholder="Enter your email address" onBlur={handleBlur} required></input>
            <br></br>
            <input className="form-control" type="password" name="password" placeholder="Enter your password" onBlur={handleBlur} required></input>
            <br></br>
            {newUser ? <input type="submit" className="button" value="sign up" placeholder="" ></input> : <input type="submit" className="button btn" value="sign in" placeholder=""></input>}
            <br></br>
            {newUser ? <p>Already have account?<span onClick={() => setNewUser(!newUser)} style={{
              color: 'blue',
              cursor: 'pointer'
            }}>login</span></p> : <p>create an account?<span onClick={() => setNewUser(!newUser)} style={{
              color: 'blue',
              cursor: 'pointer'
            }}> Sign up Here</span></p>}
          </form>
          {userInfo.issigndIn ? <button className="google" onClick={handleSignedOut}>Sign out</button> : <button className="google" onClick={handleSigned}>Sign in With Google</button>
          }
          {
            userInfo.success ? <p style={{ color: 'green', cursor: 'pointer' }}>{newUser ? "create" : 'login'}  success</p> : <p style={{ color: 'red' }}>{userInfo.error}</p>
          }
        </div>
      </div>
    </div>
  );
};

export default Login;