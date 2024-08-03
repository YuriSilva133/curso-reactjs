import './index.scss'
import { useState } from 'react'

import { tratarNumero } from '../../utils/conversao.js'

import {calcularTotalingresso} from '../../services/ingresso.js'

export default function VarEstado() {
    //let contador = 0
    const [contador, setContador] = useState(0)
    const [titulos2, setTituloS2] = useState('Ola')
    const [titulos3, setTituloS3] = useState('Selecione uma opção')
    const [marcouOpcaoS4, setTituloS4] = useState(true)
    const [tituloS5, setTituloS5] = useState('oie')
    const [descricaoS5, setDescricaoS5] = useState('oie')

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [res, setRes] = useState(0);

    const [qtdIng, setQtdIng] = useState(0);
    const [meioIng, setMeioIng] = useState(0);
    const [cupom, setCupom] = useState('');
    const [totalIng, setTotalIng] = useState(0);

    function aumentar() {
        //contador++
        if (contador < 10) {
            setContador(contador + 1)
        }
        //alert(contador)
    }

    function diminuir() {
        //contador--
        if (contador > 0) {
            setContador(contador - 1)
        }
        //alert(contador)
    }

    function calcularIngresso() {
       let tot = calcularTotalingresso(qtdIng, meioIng, cupom)

        setTotalIng(tot)
    }

    function Somar() {
        let soma = tratarNumero(num1) + tratarNumero(num2)
        setRes(soma)
    }

    return (
        <div className='pagina-varestado pagina'>
            <header className='cabecalho'>
                <h1> ReactJS | Variavel de Estado</h1>
            </header>

            <div className='secao ingresso'>
                <h1>Venda de Ingressos</h1>
                <div className='entrada'>
                    <div>
                        <label>Quantidade:</label>
                        <input type="text" value={qtdIng} onChange={e => setQtdIng(e.target.value)}/>
                    </div>
                    <div>
                        <label>Meia Entrada:</label>
                        <input type="checkbox" checked={meioIng} onChange={e => setMeioIng(e.target.checked)}/>
                    </div>

                    <div>
                        <label>Cupom:</label>
                        <input type="text" value={cupom} onChange={e => setCupom(e.target.value)}/>
                    </div>

                    <div>
                        <label> &nbsp; </label>
                        <button onClick={calcularIngresso}>Calcular</button>
                    </div>

                    <hr />
                    <div>
                        O total é R$ {totalIng.toFixed(2)}
                    </div>
                </div>
            </div>

            <div className='secao calculadora'>
                <h1>Calculadora</h1>

                <div className='entrada'>
                    <input type="text" value={num1} onChange={e => setNum1(e.target.value)} />
                    <input type="text" value={num2} onChange={e => setNum2(e.target.value)} />
                    <div> = </div>
                    <div className='res'> {res} </div>
                </div>

                <br />
                <button onClick={Somar}>Somar</button>
            </div>

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
                <input type="checkbox" checked={marcouOpcaoS4} onChange={e => setTituloS4(e.target.checked)} /> Programar é legal?
            </div>

            <div className='secao'>
                <h1> {tituloS5} </h1>

                <input onChange={e => setDescricaoS5(e.target.value)} type="text" value={descricaoS5} />

                <button onClick={() => setTituloS5(descricaoS5)}>Alterar</button>
            </div>
        </div>
    )
}