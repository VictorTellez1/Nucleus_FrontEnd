import React from 'react'

const Caracteristicas = () => {
  return (
    <section className='seguridad'>
       <div className='seguridad__contenedor'>
            <h2 className='seguridad__heading'>Nucleus es seguro</h2>
            <div className='seguridad__grid'>
                <div className='listado'>
                    <div className='listado__elemento'>
                        <p className='listado__texto'>Nucleus es seguro e imposible de clonar</p>
                    </div>
                    <div className='listado__elemento'>
                        <p className='listado__texto'>Utiliza tu cara o tu dedo para confirmar un deposito o registrar una cuenta</p>
                    </div>
                    <div className='listado__elemento'>
                        <p className='listado__texto'>Paga en un establecimiento con una tarjeta de crédito que se desactiva una vez que has hecho tu compra</p>
                    </div>
                </div>
                <div className='seguridad__imagen'>
                    <img src='img/seguridad.png' alt="seguridad nucleus"/>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Caracteristicas