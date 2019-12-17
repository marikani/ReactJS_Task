import React from 'react';
import './Login.css'
// connect redux
import { connect } from 'react-redux';
// Actions
import { setUserId, setPassword } from '../ReduxProperties/Actions/UserActions';

// Components
import { Button } from '../Button/Button';
import { TextInput } from '../TextInput/TextInput';

class Login extends React.Component {

  // Login function
  login() {
    var email = this.props.email;
    var password = this.props.password;

    let obj = {
      "username": "hruday@gmail.com",
      "password": "hruday123"
    };

    if (this.emailValidator(email) == false) {
      alert('Invalid Email Address!');
    } else if (email === obj.username && password === obj.password) {
      this.props.history.push('/Home');
    } else {
      alert("'Invalid Email or Password!'")
    }
  }

  // Email Validator
  emailValidator(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(email);
  }

  render() {
    return (
      <div style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center', height: "97vh" }}>
        <div className="card">
          <div style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <img src="https://icon-library.net/images/user-icon-png/user-icon-png-25.jpg" style={{ width: '100px', height: '100px' }} />
          </div>
          <div style={{ flex: 0.6 }}>
            <TextInput
              type="text"
              onChangeText={(text) => this.props.setUserId(text)}
              value={this.props.email}
              placeholder="Enter email.."
            />
            <TextInput
              type="password"
              onChangeText={(text) => this.props.setPassword(text)}
              value={this.props.password}
              placeholder='Enter password..'
            />
            <Button name="Login" ButtonClick={() => this.login()} />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    email: state.email,
    password: state.password
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setUserId: (val) => dispatch(setUserId(val)),
    setPassword: (val) => dispatch(setPassword(val))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);