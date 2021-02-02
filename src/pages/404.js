import * as React from "react"
import { Link } from "gatsby"


// markup
const NotFoundPage = () => {
  return (
    <main className="error-page" id="wrapper" >
          <div className="error-box">
              <div className="error-body text-center">
                  <h1>404</h1>
                  <h3 className="text-uppercase">ESTE SITIO ESTA EN MANTENIMIENTO NO ESTARA DISPONIBLE.. </h3>
                  <p className="text-muted m-t-30 m-b-30">Por favor, intenta después de un tiempo</p>
                  <footer className="footer text-center">© 2018 SASICC SAS.</footer>
              </div>
              <Link style={{margin:'20px 0 0 0'}} className='button button-blue' to="/">Regresar</Link>.
          </div>
        
    </main>
  )
}

export default NotFoundPage
