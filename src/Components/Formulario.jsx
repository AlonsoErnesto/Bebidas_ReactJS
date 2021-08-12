import React,{useContext,useState} from 'react';

import {CategoriasContext} from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const { categoria } = useContext(CategoriasContext)
    const {setBuscarRecetas,setConsultar} = useContext(RecetasContext)

    const [busqueda, setbusqueda] = useState({

        nombre:'',
        categoria:'',

    })


    const obtenerDatosReceta = e => {
        setbusqueda({
            ...busqueda,
            [e.target.name]:e.target.value
        })
    }

    const submitOn = e => {
        e.preventDefault();
        setBuscarRecetas(busqueda);
        setConsultar(true)
    }
    

    return ( 
        <form className="col-12" onSubmit = {submitOn}>
            <fieldset className="text-center">
                <legend>Busca bebidas por categoria o Ingrediente</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input
                        name="nombre"
                        className="form-control"
                        type="text"
                        placeholder="Buscar Ingrediente"
                        onChange={e => obtenerDatosReceta(e)}
                    />
                </div>
                <div className="col-md-4">
                    <select onChange={e => obtenerDatosReceta(e)}  className="form-control" name="categoria">
                        <option  value="">---Selecciona Categoria---</option>
                        {categoria.map(item => (
                            <option key={item.strCategory} value={item.strCategory}>
                                {item.strCategory}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Buscar Bebida"
                        />
                </div>
            </div>  
        </form>
     );
}
 
export default Formulario;