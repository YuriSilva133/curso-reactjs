import './index.scss';

import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="pagina-app pagina">

      <header className='cabecalho'>
        <h1> Estudos de ReactJS</h1>
        <i className='fa fa-heart'></i>
      </header>

      <section className='secao'>
        <h1>Minha pagina!</h1>
        <ul>
          <li>
            <Link to='/contato'>Ir para Contato </Link>
          </li>
          <li>
            <Link to= '/eventos'>Ir para Eventos </Link>
          </li>
          <li>
            <Link to= '/varestado'>Ir para Variavel de Estado </Link>
          </li>

        </ul>
      </section>


    </div>
  );
}
