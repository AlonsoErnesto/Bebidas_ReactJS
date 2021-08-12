import React,{createContext,useState,useEffect} from 'react';
import axios from 'axios'


export const RecetasContext = createContext();

const RecetasProvider = (props) => {

    const [recetas, setRecetas] = useState([]);

    const [busqueda, setBuscarRecetas] = useState({
        nombre:'',
        categoria:''
    });
    const [consultar, setConsultar] = useState(false);

    const {nombre,categoria} = busqueda

    useEffect(() => {
        if(consultar)
        {
            const obtenerReceta = async() =>{

            const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
            const resultado = await axios(url);
            setRecetas(resultado.data.drinks)
        
            }
            obtenerReceta();
        }
    }, [busqueda])

    return ( 
        <RecetasContext.Provider 
            value = {{
                recetas,
                setBuscarRecetas,
                setConsultar,
            }}
        >
            {props.children}
        </RecetasContext.Provider>
     );
}
 
export default RecetasProvider;