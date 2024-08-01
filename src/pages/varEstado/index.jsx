import './index.scss'
import {useState} from 'react'


export default function VarEstado() {
    //let contador = 0
    const [contador, setContador] = useState(0)
    const [titulos2, setTituloS2] = useState('Ola')
    const [titulos3, setTituloS3] = useState('Selecione uma opção')
    const [marcouOpcaoS4, setTituloS4] = useState(true)
    const [tituloS5, setTituloS5 ] = useState('oie')
    const [descricaoS5, setDescricaoS5] = useState('oie')

    function aumentar() {
        //contador++
        setContador(contador + 1)
        alert(contador)
    }

    function diminuir() {
        //contador--
        setContador(contador - 1)
    }

    return (
        <div className='pagina-varestado pagina'>
            <header className='cabecalho'>
                <h1> ReactJS | Variavel de Estado</h1>
            </header>

            <div className='secao'>
                    <h1>Contador</h1>

                <div className='cont'>
                    <button onClick={aumentar}> + </button>
                        {contador}
                    <button onClick={diminuir}> - </button>
                </div>
            </div>

            <div className='secao'>
                <h1>{titulos2}</h1>
                <input type="text" value={titulos2} onChange={e => setTituloS2(e.target.value)} />
            </div>

            <div className='secao'>
                <h1>{titulos3}</h1>

                <select onChange={e => setTituloS3(e.target.value)}>
                    <option>Selecione Uma opção</option>
                    <option>JavaScript</option>
                    <option>Html</option>
                    <option>CSS</option>
                </select>
            </div>

            <div className='secao'>
                <h1>Programar é legal? {marcouOpcaoS4 ? 'Sim' : 'Não'}</h1>
                <input  type="checkbox" checked={marcouOpcaoS4} onChange={e => setTituloS4(e.target.checked)}/> Programar é legal?
            </div>

            <div className='secao'>
                <h1> {tituloS5} </h1>

                <input onChange={e => setDescricaoS5(e.target.value)} type="text" value={descricaoS5} />

                <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
            </div>
        </div>
    )
}