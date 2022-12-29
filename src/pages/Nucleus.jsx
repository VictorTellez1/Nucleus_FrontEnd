import React from 'react'

const Nucleus = () => {
  return (
    <main className='nucleus'>
        <h1 className='nucleus__heading'>¿Qué es?</h1>
        <div className='nucleus__contenedor'>
            <div className='nucleus__grid'>
                <div className='nucleus__imagen'>
                    <img src="img/app_2.svg" alt="app nucleus"/>
                </div>
                <div className='listado'>
                    <div className='listado__elemento'>
                        <h2 className='listado__heading'>Fácil</h2>
                        <p className='listado__texto'>Crea un cuenta,envia tu documentacion y comienza a utilizar nucleus en un par de horas</p>
                    </div>
                    <div className='listado__elemento'>
                        <h2 className='listado__heading'>Seguro</h2>
                        <p className='listado__texto'>Por su tecnología digital, nucleus es imposible de hackear o robar</p>
                    </div>
                    <div className='listado__elemento'>
                        <h2 className='listado__heading'>Administrable</h2>
                        <p className='listado__texto'>Añade o transfiere bonos a tu banco, añade limiste o controla tus gastos.</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Nucleus