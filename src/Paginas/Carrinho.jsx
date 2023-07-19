import CSS from "../Projeto/css/carrinho/carrinho.module.css";
import Container from "react-bootstrap/Container";
import { Cabecalho } from "../Parciais/Cabecalho";
import { Rodape } from "../Parciais/Rodape";
import { useAppContext } from "../AppContext/AppContext";
import { Lista } from "../Componentes/Lista";

export const Carrinho = () => {
   const { itensCarrinho } = useAppContext ();

   return (
      <div className="rolagem">
         <section className="paginas">
            <Cabecalho />

            <main>
               <section className={CSS.carrinho}>
                  <div className={CSS.conteudoCarrinho}>
                     <h1> Carrinho </h1>

                     <Container fluid>
                        {itensCarrinho.length === 0 ?
                           "Carrinho vazio." :
                           <Lista
                              botaoTitulo="Continuar"
                              aoClicar={() => {}}
                        />
                        }
                     </Container>
                  </div>
               </section>
            </main>
         </section>

         <section className="paginas">
            <Rodape />
         </section>
      </div>
   );
}