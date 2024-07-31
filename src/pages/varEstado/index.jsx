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

    function alterarTitulos2(e) {
        let novoValor = e.target.value;
        setTituloS2(novoValor)
    }

    function alterarTitulos3(e) {
        let novoValor = e.target.value
        setTituloS3(novoValor)
    }

    function alterarOpcaoS4(e) {
        let novoValor = e.target.checked
        setTituloS4(novoValor)
    }
    
    //secao5
    function alterarDescricaoS5(e) {
        let novoValor = e.target.value
        setDescricaoS5(novoValor)
    }
    function alterarTituloS5() {
        setTituloS5(descricaoS5)
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
                <input type="text" value={titulos2} onChange={alterarTitulos2} />
            </div>

            <div className='secao'>
                <h1>{titulos3}</h1>

                <select onChange={alterarTitulos3}>
                    <option>Selecione Uma opção</option>
                    <option>JavaScript</option>
                    <option>Html</option>
                    <option>CSS</option>
                </select>
            </div>

            <div className='secao'>
                <h1>Programar é legal? {marcouOpcaoS4 ? 'Sim' : 'Não'}</h1>
                <input onChange={alterarOpcaoS4} type="checkbox" checked={marcouOpcaoS4}/> Programar é legal?
            </div>

            <div className='secao'>
                <h1> {tituloS5} </h1>

                <input onChange={alterarDescricaoS5} type="text" value={descricaoS5} />

                <button onClick={alterarTituloS5}>Alterar</button>
            </div>
        </div>
    )
}