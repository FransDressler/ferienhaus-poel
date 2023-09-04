import './App.css';

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home.jsx';
import Navbar from './components/navigation.jsx';
import Houses from './components/houses.jsx';
import Contact from './components/contact.jsx';
import Footer from './components/footer.jsx';
import Booking from './components/booking.jsx';
import SignIn from './components/signin.jsx';
import Overview from './components/overview.jsx';
import Location from './components/location.jsx';
import Impressum from './components/impressum';
import Regulation from './components/privacyRegulation';

import './styles/styles.scss'

import './index.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isSignedIn: false
    }
  }

  changeSignIn = (value) => {
    this.setState({isSignedIn: value})
  }

  render() {
  return (    
    <Router>
      <Navbar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/häuser" element={<Houses/>}/>
        <Route path="/kontakt" element={<Contact/>}/>
        <Route path="/buchen" element={<Booking/>}/>
        <Route path="/standorte" element={<Location/>}/>
        <Route path="/datenschutzrichtlinien" element={<Regulation/>} />
        <Route path="/impressum" element={<Impressum/>} />
        <Route path="/anmeldung" element={this.state.isSignedIn ? <Overview/> : <SignIn changeSignIn={this.changeSignIn}/>} />
      </Routes>
      <Footer/> 
    </Router>

  );
}
}

export default App;
