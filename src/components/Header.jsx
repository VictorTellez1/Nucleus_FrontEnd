import React from 'react'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <header className='header'>
        <div className='header__contenedor'>
            <div className='header__barra'>
                <div className='header__logo'>
                    <Link to="/">
                        <img src="img/logo.svg" alt="logonucleus"/>
                    </Link>
                </div>
                <nav className='navegacion'>
                    <Link to="/que-es" className="navegacion__link">¿Qué es?</Link>
                    <Link to="/como-funciona" className="navegacion__link">¿Cómo Funciona?</Link>
                    <Link to="/" className="navegacion__link">Precios</Link>
                    <Link to="/" className="navegacion__link">Contratar</Link>
                </nav>
            </div>
            <div className='header__grid'>
                <div className='header__texto'>
                    <h1 className='header__heading'>Recibe y realiza pagos en tu celular con Nucleus</h1>
                    <Link className="header__boton" for="#">Obtener cuenta</Link>
                </div>
                <div className='header__grafico'>
                    <img className='header__imagen' src="img/app_1.svg" alt="ImagenNucleaosApp"/>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header