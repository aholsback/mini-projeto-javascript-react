import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./AppContext/AppContext";
import { PaginaInicial } from "./Paginas/PaginaInicial";
import { Loja } from "./Paginas/Loja";
import { SobreNos } from "./Paginas/SobreNos";

function App() {
   return (
      <BrowserRouter>
         <AppContext>
            <Routes>
               <Route path="/" element={<PaginaInicial />} />
               <Route path="loja" element={<Loja />} />
               <Route path="sobre-nos" element={<SobreNos />} />
            </Routes>
         </AppContext>
      </BrowserRouter>
   );
}

export default App;