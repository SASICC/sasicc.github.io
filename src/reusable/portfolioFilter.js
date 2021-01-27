import React from 'react';

export default function  FilterProtafolio (props) {
    let {data} = props
    return (
        <div className="row">
            <div className="12u$ portfolio"> 
                <div className="portfolio-filter">
                    <ul className="text-center">
                        <li key='all'><a  onClick={(e) => props.onChange('all')}  key='all'>Todos</a></li>
                        {
                            data.map(({key, nombre})=> {
                                return <li key={key}><a onClick={(e) => props.onChange(nombre)}>{nombre}</a></li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}   

