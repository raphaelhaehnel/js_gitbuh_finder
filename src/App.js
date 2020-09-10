import React, { Fragment, Component } from 'react';
import Navbar from './components/layout/Navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    const name = 'Raphael Haehnel';
    const foo = () => 'Bar';

    const activateLasers = () => (name = 'You have just been hacked');
    return (
      <div className='App'>
        <Navbar /> {/*There are two default props: title and icon*/}
        <UserItem />
      </div>
    );
  }
}

export default App;
