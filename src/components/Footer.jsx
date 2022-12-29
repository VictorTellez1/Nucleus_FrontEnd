import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__contenedor'>
            <div className="footer__grid">
                <div className='footer__logo'>
                    <Link to="/">
                        <img src="img/logo-blanco.svg" alt="logo Blanco nucleus"/>
                    </Link>
                </div>
                <nav className='navegacion'>
                    <Link to="/que-es" className="navegacion__link navegacion__link--blanco">¿Qué es?</Link>
                    <Link to="/como-funciona" className="navegacion__link navegacion__link--blanco">¿Cómo Funciona?</Link>
                    <Link to="/" className="navegacion__link navegacion__link--blanco">Precios</Link>
                    <Link to="/" className="navegacion__link navegacion__link--blanco">Contratar</Link>
                </nav>
            </div>
        </div>
    </footer>
  )
}

export default Footer