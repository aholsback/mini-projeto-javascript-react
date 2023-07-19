import "../Projeto/css/contato/contato.css";
import { Cabecalho } from "../Parciais/Cabecalho";
import { Rodape } from "../Parciais/Rodape";

export const Contato = () => {
   return (
      <div className="rolagem">
         <section className="paginas">
            <Cabecalho />

            <main>
               <section className="contato container">
                  <div className="formulario-contato mb-3">
                     <h2 className="h2 fonte-2"> Formulário de contato </h2>
                     <br />

                     <label className="form-label" htmlFor="nome">
                        Nome:
                     </label>
                     <input className="form-control" type="text" name="nome-completo" id="nome" placeholder="João da Silva" />
                     <br />

                     <label className="form-label" htmlFor="email">
                        E-mail:
                     </label>
                     <input className="form-control" type="email" name="email-pessoal" id="email" placeholder="nome@exemplo.com" />
                     <br />

                     <label className="form-label" htmlFor="assunto">
                        Assunto:
                     </label>
                     <input className="form-control" type="text" name="assunto-contato" id="assunto" placeholder="Motivo do contato" />
                     <br />

                     <label className="form-label" htmlFor="descricao">
                        Descrição:
                     </label>
                     <textarea className="form-control" name="descricao-problema" id="descricao" rows="3" placeholder="Descreva o assunto aqui."></textarea>
                     <br />

                     <button className="botao-contato" type="submit"> Enviar </button>
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