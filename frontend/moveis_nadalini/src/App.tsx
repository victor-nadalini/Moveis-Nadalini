import './styles/App.css'
import './styles/navbar.css'
import './styles/body.css'
import './styles/ul.css'
import './styles/a.css'
import './styles/div.css'
import './styles/button.css'


function App() {
  return (
    <>
  <body>
    <div className='cupom'>Use o cupom NADALINI5 e garanta 5% de desconto.</div>
      <div className='navbar'>
        <nav className='navbar'>
          <a href='/'>
            <img src="/src/assets/moveisteste.avif" alt="" ></img>
          </a>
          <ul className='menu'>
            <li><a className='link_menu' href="#">Home</a></li>
            <li><a className='link_menu' href="#">Sobre nós</a></li>
            <li><a className='link_menu' href="#">Nossa loja</a></li>
            <li><a className='link_menu' href="#">Fale conosco</a></li>
            <li><a className='link_menu' href="#">Política de reembolso e envio</a></li>
            <li><a className='link_menu' href="#">Feedback</a></li>
          </ul>
          <button className='carrinho_button'>
            <div>
              <span>
                Carrinho
              </span>
            </div>
          </button>
        </nav>
      </div>
    </body>
    </>
  )
}

export default App;