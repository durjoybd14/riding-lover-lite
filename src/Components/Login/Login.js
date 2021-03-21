import React, { useContext, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { userContext } from '../../App';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useHistory, useLocation } from 'react-router-dom';


const Login = () => {
  const [newUser, setNewUser] = useState(false);

  const [user, setUser] = useContext(userContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);

  }

  //log in with google
  const handleGoogleSignIn = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()
      .signInWithPopup(googleProvider)
      .then((result) => {
        const user = result.user;
        const userInfo = { name: user.displayName, email: user.email };
        setUser(userInfo);
        history.replace(from);

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  //log in with facebook
  const handleFacebookSignIn = () => {
    const facebookProvider = new firebase.auth.FacebookAuthProvider();;
    firebase
      .auth()
      .signInWithPopup(facebookProvider)
      .then((result) => {
        const user = result.user;
        const userInfo = { name: user.displayName, email: user.email };
        setUser(userInfo);
        history.replace(from);

      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage)
      });
  }

  //own authentication

  const handleBlur = (e) => {
    let isFieldValid = true;

    if (e.target.name === 'email') {
      isFieldValid = /\S+@\S+.\S+/.test(e.target.value)
    }

    if (e.target.name === 'password') {
      const isPasswordValid = e.target.value.length >= 6;
      const isPasswordHasNumber = /\d{1}/.test(e.target.value);
      isFieldValid = isPasswordValid && isPasswordHasNumber;
    }

    if (isFieldValid) {
      const newUserInfo = { ...user };
      newUserInfo[e.target.name] = e.target.value;
      setUser(newUserInfo);
    }

  }

  const handleSubmit = (e) => {
    if (newUser && user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          history.replace(from);
          updateUserName(user.name);
          console.log(res)
        })
        .catch(error => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo)
        });
    }

    if (!newUser && user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then((res) => {
          const newUserInfo = { ...user };
          newUserInfo.error = '';
          newUserInfo.success = true;
          setUser(newUserInfo);
          history.replace(from);
          console.log('form submitted')
        })
        .catch((error) => {
          const newUserInfo = { ...user };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setUser(newUserInfo)
        });
    }
    e.preventDefault();
  }

  const updateUserName = name => {
    var user = firebase.auth().currentUser;

    user.updateProfile({
      displayName: name
    }).then(function () {
      console.log('user name update successfully')
    }).catch(function (error) {
      console.log(error)

    });
  }




  const formStyle = {
    border: '2px solid orange',
    borderRadius: '10px',
    margin: '20px 20px',
    padding: '20px'
  }

  const buttonStyle = {
    border: 'none',
    backgroundColor: 'transparent',
    textDecoration: 'underline'

  }

  return (

    <div className="row">
      <div className="col-12">


        {newUser ?
          <Form onSubmit={handleSubmit} style={formStyle}>
            <h3 className="py-3">Create an account</h3>
            <Form.Group>
              <Form.Control className="mt-3" onBlur={handleBlur} type="name" placeholder="Name" required />
              <Form.Control className="mt-3" onBlur={handleBlur} type="email" placeholder="User Name or Email" required />
              <Form.Control className="mt-3" onBlur={handleBlur} type="password" placeholder="Password" required />
              <Form.Control className="mt-3" onBlur={handleBlur} type="password" placeholder="Confirm Password" required />
            </Form.Group>

            <Button className="form-control" variant="primary" type="submit">Create an account</Button>

            <Form.Text className="text-muted text-center m-2">Already have an account? <button onClick={() => setNewUser(!newUser)} style={buttonStyle}> Login</button> </Form.Text>            <Form.Text className="text-muted text-center m-3">OR</Form.Text>

            <Button className="text-center mx-auto d-block" variant="success" onClick={handleGoogleSignIn}>Login with Google</Button>
            <Button className="text-center mx-auto mt-2 d-block" variant="primary" onClick={handleFacebookSignIn}>Login with Facebook</Button>
          </Form> :


          <Form onSubmit={handleSubmit} style={formStyle}>
            <h3 className="py-3">Login</h3>
            <Form.Group>
              <Form.Control className="mt-3" onBlur={handleBlur} type="email" placeholder="Email" required />
              <Form.Control className="mt-3" onBlur={handleBlur} type="password" placeholder="Password" required />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox" className=" d-flex justify-content-between">
              <Form.Check type="checkbox" label="Remember Me" />
              <Form.Check as={Link} to="#" className="text-muted">Forgot Password</Form.Check>
            </Form.Group>

            <Button className="form-control" variant="primary" type="submit">Login</Button>

            <Form.Text className="text-muted text-center m-2">Don't have an account? <button onClick={() => setNewUser(!newUser)} style={buttonStyle}> Create an account</button> </Form.Text>
            <Form.Text className="text-muted text-center m-3">OR</Form.Text>

            <Button className="text-center mx-auto d-block" variant="success" onClick={handleGoogleSignIn}>Login with Google</Button>
            <Button className="text-center mx-auto mt-2 d-block" variant="primary" onClick={handleFacebookSignIn}>Login with Facebook</Button>
          </Form>
        }
      </div>
    </div>



  );
};

export default Login;