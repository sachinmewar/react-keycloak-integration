import Welcome from './Welcome.js';
import Auth from './Auth';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css'

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <ul>
          <li>
            <Link to='/'> Public Component </Link>
          </li>
          <li>
            <Link to='/secure'> Secure Component </Link>
          </li>
        </ul>
        <Route exact path='/' component={Welcome} />
        <Route path='/secure' component={Auth} />
      </div>
    </BrowserRouter>
  );
};

export default App;
