import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
<<<<<<< HEAD

=======
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8

import Login from "./components/LoginContainer/Login.js";
import SignUp from "./components/SignUpContainer/SignUp.js";
import UserHome from './components/UserHomeContainer/UserHome.js';
import Game from  './components/GameContainer/Game.js';
import WelcomeScreen from "./components/WelcomeContainer/WelcomeScreen.js";
<<<<<<< HEAD
import Menu from './components/MenuContainer/Menu.js';
import ForgotPassword from "./components/ForgotPasswordContainer/ForgotPassword.js";
import EnglishInstructions from './components/InstructionContainer/EnglishInstructions.js';
import SpanishInstructions from './components/InstructionContainer/SpanishInstructions.js';
=======
import UserHome from './components/UserHomeContainer/UserHome.js';
import NavBar from './components/NavbarContainer/NavBar.js';
import Container from 'react-bootstrap/Container';

>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8



function App() {
<<<<<<< HEAD
  return (
     <Container>   

        <Router>
          <div className="App">
         
          <br></br>
          <div className="auth-wrapper">
              <div className="auth-inner">
              <Row>
                <Switch>
                  <Route exact path='/' component={WelcomeScreen} />
                  <Route path="/sign-in" component={Login} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/userhome" component={UserHome} />
                  <Route path="/game" component={Game} />
                  <Route path="/forgotpw" component={ForgotPassword} />
                  <Route path="/englishinstructions" component={EnglishInstructions} />
                  <Route path="/SpanishInstructions" component={SpanishInstructions} />
                  <Route path="/menu" component={Menu} />
                </Switch>
              </Row>
              </div>
            </div>
          </div>
        </Router>
      </Container>
=======
  return (<Router>
    <div className="App">
       <NavBar />
          
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={WelcomeScreen} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/userhome" component={UserHome} />
          </Switch>
        </div>
      </div>
    </div></Router>
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
  );
}

export default App;

<<<<<<< HEAD

=======
const Layout = props => <Container>{props.children} </Container>;
>>>>>>> b470267ac7e818c4b3c9151f96d94d42b72f74f8
