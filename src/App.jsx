import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContext } from "./AppContext/AppContext";
import { PaginaInicial } from "./Paginas/PaginaInicial";
import { Loja } from "./Paginas/Loja";
import { SobreNos } from "./Paginas/SobreNos";
import { Equipe } from "./Paginas/Equipe";
import { Contato } from "./Paginas/Contato";
import { Carrinho } from "./Paginas/Carrinho";

function App() {
   return (
      <BrowserRouter>
         <AppContext>
            <Routes>
               <Route path="/" element={<PaginaInicial />} />
               <Route path="loja" element={<Loja />} />
               <Route path="sobre-nos" element={<SobreNos />} />
               <Route path="equipe" element={<Equipe />} />
               <Route path="contato" element={<Contato />} />
               <Route path="carrinho" element={<Carrinho />} />
            </Routes>
         </AppContext>
      </BrowserRouter>
   );
}

export default App;