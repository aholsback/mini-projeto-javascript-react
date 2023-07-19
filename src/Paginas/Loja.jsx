import "../Projeto/css/loja/loja.css";
import { Cabecalho } from "../Parciais/Cabecalho";
import { Rodape } from "../Parciais/Rodape";
import { useAppContext } from "../AppContext/AppContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Cartoes } from "../Componentes/Cartoes";
import { Produtos } from "../Service/Produtos";
import { addCarrinho } from "../Service/Service";

export const Loja = () => {
   const { setItensCarrinho } = useAppContext();

   const comprar = async (produto) => {
      setItensCarrinho (
         await addCarrinho (produto)
      );
   }

   return (
      <div className="rolagem">
         <section className="paginas">
            <Cabecalho />

            <main>
               <section className="loja">
                  <div className="produtos">
                     <div className="produto">
                        <h1 className="fonte-2">
                           Conheça a nossa coleção
                        </h1>

                        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                           {Produtos().map((produto, index) => {
                              return (
                                 <Col key={index}>
                                    <Cartoes
                                       titulo={produto.titulo}
                                       preco={produto.preco}
                                       posicao="top"
                                       img={produto.img}
                                       fonteClass="preco fonte-2"
                                       tituloBotao="Comprar"
                                       botaoVariante="outline-success"
                                       tituloCarregando="Adicionando ao carrinho"
                                       varianteCarregando="secondary"
                                       funcao={() => comprar (produto)}
                                    />
                                 </Col>
                              );
                           })}
                        </Row>
                     </div>
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