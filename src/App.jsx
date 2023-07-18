import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./AppContext/AppContext";
import { Cabecalho } from "./Parciais/Cabecalho";
import { PaginaInicial } from "./Paginas/PaginaInicial";
import { Rodape } from "./Parciais/Rodape";

function App () {
   return (
      <BrowserRouter>
         <AppContext>
            <div className="rolagem">
               <section className="paginas">
                  <Cabecalho />

                  <Routes>
                     <Route path="/" element={<PaginaInicial />} />
                  </Routes>
               </section>

               <section className="paginas">
                  <Rodape />
               </section>
            </div>
         </AppContext>
      </BrowserRouter>
   );
}

export default App;