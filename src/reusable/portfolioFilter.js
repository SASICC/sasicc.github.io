import React, { PureComponent } from 'react';

class FilterProtafolio extends PureComponent {
    render() {
        let {data} = this.props
        return (
            <div className="row">
                <div className="12u$ portfolio"> 
                    <div className="portfolio-filter">
                        <ul className="text-center">
                            <li key='all'><a  key='all'>Todos</a></li>
                            {
                                data.map(({key, nombre})=> {
                                    return <li key={key}><a>{nombre}</a></li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}   




export default FilterProtafolio;