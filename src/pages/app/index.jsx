import './index.css';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
      <h1> Estudos de ReactJS</h1>
      <i className='fa fa-heart'></i>

      <ul>
        <li>
          <Link to='/contato'> contato </Link>
        </li>
      </ul>

    </div>
  );
}
