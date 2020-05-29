import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Login from "./components/LoginContainer/Login.js";
import SignUp from "./components/SignUpContainer/SignUp.js";
import UserHome from './components/UserHomeContainer/UserHome.js';

import Game from  './components/GameContainer/Game.js';
import WelcomeScreen from "./components/WelcomeContainer/WelcomeScreen.js";
import Menu from './components/MenuContainer/Menu.js';
import ForgotPassword from "./components/ForgotPasswordContainer/ForgotPassword.js";
import EnglishInstructions from './components/InstructionContainer/EnglishInstructions.js';
import SpanishInstructions from './components/InstructionContainer/SpanishInstructions.js';






function App() {
  return (
      <Container>   

        <Router>
          <div className="App">
  
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
        </Router>
      </Container>
  );
}

export default App;



