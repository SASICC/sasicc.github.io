import  React  from 'react';


export const  WrapperFooter = () => {
  
  return (<section id="footer" className="wrapper white" >
            <div className="container">
                <header>
                <h2>CONTACTENOS</h2>
                <p></p>
                </header>
                <div className="row">
                <section className="six columns  fadeInLeft animated" >
                    <i className="fa fa-phone fa-2x"></i>
                    <div className="content text-center">
                    <p className="text-align">Celular: 318-536-1601</p>
                    </div>
                </section>
                <section className="six columns fadeInRight animate">
                    <i className="fa fa fa-envelope fa-2x"></i>
                    <div className="content">
                    <p className="text-align">infosasicc@gmail.com</p>
                    </div>
                </section>

                </div>
            </div>
        </section>
    )
}