import { createContext, useContext, useState } from "react";
import { getProdutos } from "../Service/Service";

const Context = createContext ({});

export const useAppContext = () => useContext (Context);

const produtosCarrinho = await getProdutos ();

export const AppContext = ({ children }) => {
   const [itensCarrinho, setItensCarrinho] = useState (produtosCarrinho);

   return (
      <Context.Provider value={{ itensCarrinho, setItensCarrinho }}>
         {children}
      </Context.Provider>
   );
}