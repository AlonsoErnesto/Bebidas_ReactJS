import Formulario from "./Components/Formulario";
import Header from "./Components/Header";
import ListaRecetas from "./Components/ListaRecetas";

//createContext
import CategoriasProvider from './context/CategoriasContext'
import RecetasProvider from "./context/RecetasContext";
import ModalProvider from "./context/ModalContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <ModalProvider>
      
      <Header/>
      <div className="container mt-5">
        <div className="row">
            <Formulario/>
        </div>
        <ListaRecetas/>
      </div>


      </ModalProvider>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
