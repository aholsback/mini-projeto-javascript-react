import "../Projeto/css/equipe/equipe.css";
import { Cabecalho } from "../Parciais/Cabecalho";
import { Rodape } from "../Parciais/Rodape";
import IsabelaGarcia from "../Projeto/img/equipe/isabela-garcia.jpg";
import PedroSilva from "../Projeto/img/equipe/pedro-silva.jpeg";
import MarianaSantos from "../Projeto/img/equipe/mariana-santos.jpg";
import LucasOliveira from "../Projeto/img/equipe/lucas-oliveira.jpg";
import AnaSouza from "../Projeto/img/equipe/ana-souza.jpg";
import RafaelaCosta from "../Projeto/img/equipe/rafaela-costa.jpg";

export const Equipe = () => {
   return (
      <div className="rolagem">
         <section className="paginas">
            <Cabecalho />

            <section className="equipe">
               <div className="nossa-equipe">
                  <h1 className="fonte-2"> Conheça a nossa equipe </h1>
                  <div className="pessoas">
                     <div className="pessoa">
                        <img className="foto-equipe" src={IsabelaGarcia} alt="Isabela Garcia" />
                           <div className="nome-cargo">
                              <h4 className="fonte-2"> Isabela Garcia </h4>
                              <h6 className="fonte-1"> Gerente de Marketing Digital </h6>
                           </div>
                     </div>

                     <div className="pessoa">
                        <img className="foto-equipe" src={PedroSilva} alt="Pedro Silva" />
                           <div className="nome-cargo">
                              <h4 className="fonte-2"> Pedro Silva </h4>
                              <h6 className="fonte-1"> Especialista em Atendimento ao Cliente </h6>
                           </div>
                     </div>

                     <div className="pessoa">
                        <img className="foto-equipe" src={MarianaSantos} alt="Mariana Santos" />
                           <div className="nome-cargo">
                              <h4 className="fonte-2"> Mariana Santos </h4>
                              <h6 className="fonte-1"> Designer de Interface </h6>
                           </div>
                     </div>

                     <div className="pessoa">
                        <img className="foto-equipe" src={LucasOliveira} alt="Lucas Oliveira" />
                           <div className="nome-cargo">
                              <h4 className="fonte-2"> Lucas Oliveira </h4>
                              <h6 className="fonte-1"> Analista de Dados de Vendas </h6>
                           </div>
                     </div>

                     <div className="pessoa">
                        <img className="foto-equipe" src={AnaSouza} alt="Ana Souza" />
                           <div className="nome-cargo">
                              <h4 className="fonte-2"> Ana Souza </h4>
                              <h6 className="fonte-1"> Especialista em Logística e Envios </h6>
                           </div>
                     </div>

                     <div className="pessoa">
                        <img className="foto-equipe" src={RafaelaCosta} alt="Rafaela Costa" />
                           <div className="nome-cargo">
                              <h4 className="fonte-2"> Rafaela Costa </h4>
                              <h6 className="fonte-1"> Analista de E-commerce </h6>
                           </div>
                     </div>
                  </div>
               </div>
            </section>
         </section>

         <section className="paginas">
            <Rodape />
         </section>
      </div >
   );
}