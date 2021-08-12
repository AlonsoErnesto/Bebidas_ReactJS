import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios';
// crear el CONTEXT

export const CategoriasContext =  createContext();

//provider es odne se encuentran las funciones y state



const CategoriasProvider = (props) => {

    const [categoria, setCategoria] = useState([])

    useEffect(() => {
        
        const obtenerCategorias = async () => {
            const url = `https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`
            const categoria = await axios.get(url)
            
            setCategoria(categoria.data.drinks)
        
        }
        obtenerCategorias();

    }, [])

    return (
        <CategoriasContext.Provider 
            value={{
                categoria
            }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )

}

export default CategoriasProvider;

