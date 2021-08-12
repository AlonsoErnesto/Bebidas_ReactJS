import React,{useContext,useState} from 'react';
import { ModalContext } from '../context/ModalContext';
//
import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 440,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));


/////

const Receta = ({recetas}) => {


    const [modalStyle] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const classes = useStyles();

    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
        
    }
  

    const { setIdReceta,receta,setReceta } = useContext(ModalContext)

    const mostrarIngredientes = info => {
        let ingredientes = [];
        for(let i= 1 ; i <16;i++)
        {
            if(info[`strIngredient${i}`])
            {
                ingredientes.push(
                    <li>{info[`strIngredient${i}`]}  {info[`strMeasure${i}`]} </li>
                )
            }
        }
    }
    console.log(receta)
    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recetas.strDrink}</h2> 
                <img className="card-img-top" src={recetas.strDrinkThumb} alt={`Imagen de ${recetas.strDrink}`}/>
                <div className="card-body">
                    <button className="btn btn-block btn-primary" onClick={()=>{
                        setIdReceta(recetas.idDrink);
                        handleOpen();
                    }}>
                        Ver Receta
                    </button>
                    <Modal  open={open} onClose={()=>{setIdReceta(null);handleClose();setReceta({})}}>
                        <div style={modalStyle} className={classes.paper} >
                            <h2>{receta.strDrink}</h2>
                            <h3 className="mt-4">Instrucciones</h3>
                            <p>
                                {receta.strInstructions}
                            </p>
                            <img className="img-fluid mt-4" src={receta.strDrinkThumb}/>
                            <h3>Ingredients y Cantidades</h3>
                            <ul>
                                {mostrarIngredientes(receta)}
                            </ul>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>  
     );
}
 
export default Receta;

