import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">

      <header className='cabecalho' >
        <h1> Estudos de ReactJS</h1>
        <i className='fa fa-heart' back></i>
      </header>

      <section className='secao'>
        <h1>Minha pagina!</h1>
        <ul>
          <li>
            <Link to='/contato'> contato </Link>
          </li>
        </ul>
      </section>


    </div>
  );
}
