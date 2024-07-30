import './index.scss'

export default function Eventos() {
    return (
        <div className='pagina-eventos pagina'>
            <header className='cabecalho'>
                <h1>reactJS | Eventos</h1>
            </header>

            <section className='secao'>
                <h1>Entendendo eventos</h1>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste, dolores, in quasi sint alias nisi, architecto harum maxime eligendi pariatur quae minus quos quisquam? Iste veritatis error consectetur blanditiis reiciendis.</p>

                <input type="text" placeholder='Digite aqui alguma coisa' />

                <select>
                    <option>Selecione</option>
                    <option>item A</option>
                    <option>item B</option>
                </select>

                <div className='grupo'>
                    <input type="checkbox" name="" id="" /> Opção 1
                    <input type="checkbox" name="" id="" /> Opção 2
                </div>

                <div className='grupo'>
                    <div>
                        <input type="radio" name='gpo' /> Opção 1
                    </div>
                    <div>
                        <input type="radio" name='gpo' /> Opção 2
                    </div>
                </div>
            </section>
        </div>
    )
}