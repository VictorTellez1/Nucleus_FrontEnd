import React from 'react'

const Comisiones = () => {
  return (
    <section className='comisiones'>
        <div className='comisiones__contenedor'>
            <h2 className='comisiones__heading'>Comisiones</h2>
            <div className='comisiones__grid'>
                <div className='comisiones__contenido'>
                    <p className='comisiones__texto'>Mientras más utilices nucleus, menos pagas:</p>
                    <div className='listado'>
                        <div className='listado__elemento listado__elemento--2col'>
                            <p className='listado__numero'>3%</p>
                            <p className='listado__texto'>de todas tus transacciones si tus movimientos son menores a $999 USD.</p>
                        </div>
                        <div className='listado__elemento listado__elemento--2col'>
                            <p className='listado__numero'>2.5%</p>
                            <p className='listado__texto'>de todas tus transacciones si tus movimientos son mayores a $999 USD.</p>
                        </div>
                    </div>
                </div>
                <div className='comisiones__imagen'>
                    <img src="img/app_3.svg" alt="imagen app"/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Comisiones