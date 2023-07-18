import "../Projeto/js/index";
import "../Projeto/css/rolagem.css";
import "../Projeto/css/index/index.css";
import "../Projeto/css/index/responsividade.css";
import Carrossel1 from "../Projeto/img/carrossel/carrossel-1.png";
import Carrossel2 from "../Projeto/img/carrossel/carrossel-2.png";
import Carrossel3 from "../Projeto/img/carrossel/carrossel-3.png";
import Carrossel4 from "../Projeto/img/carrossel/carrossel-4.png";

export const PaginaInicial = () => {
   return (
      <main>
         <section className="carrossel">
            <div className="estrutura-carrossel">
               <input className="radio-carrossel" type="radio" name="botao-radio" id="radio1" defaultChecked />
               <input className="radio-carrossel" type="radio" name="botao-radio" id="radio2" />
               <input className="radio-carrossel" type="radio" name="botao-radio" id="radio3" />
               <input className="radio-carrossel" type="radio" name="botao-radio" id="radio4" />

               <div className="itens-carrossel ativo">
                  <img className="img-carrossel" src={Carrossel1} alt="Carrossel 1" />
                  <div className="dependencias-carrossel">
                     <div className="grid-dependencias">
                        <div className="carrossel-esquerda flex-direction-column">
                           <h2 className="fonte-1 carrossel-fonte-azul"> Chegou nossa nova coleção </h2>
                           <h1 className="fonte-2 carrossel-fonte-laranja"> Venha conferir! </h1>
                        </div>

                        <div className="carrossel-direita flex-direction-row alinhar-meio">
                           <button className="botao-carrossel" type="button"> Visitar a loja </button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="itens-carrossel">
                  <img className="img-carrossel" src={Carrossel2} alt="Carrossel 2" />
                  <div className="dependencias-carrossel">
                     <div className="grid-dependencias">
                        <div className="carrossel-esquerda flex-direction-column">
                           <h2 className="fonte-1 carrossel-fonte-azul"> Chegou nossa nova coleção </h2>
                           <h1 className="fonte-2 carrossel-fonte-laranja"> Venha conferir! </h1>
                        </div>

                        <div className="carrossel-direita flex-direction-row alinhar-meio">
                           <button className="botao-carrossel" type="button"> Visitar a loja </button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="itens-carrossel">
                  <img className="img-carrossel" src={Carrossel3} alt="Carrossel 3" />
                  <div className="dependencias-carrossel">
                     <div className="grid-dependencias">
                        <div className="carrossel-esquerda flex-direction-column"></div>

                        <div className="carrossel-direita flex-direction-column alinhar-meio">
                           <h2 className="fonte-1 carrossel-fonte-azul"> Chegou nossa nova coleção </h2>
                           <h1 className="fonte-2 carrossel-fonte-laranja"> Venha conferir! </h1>
                           <button className="botao-carrossel" type="button"> Visitar a loja </button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="itens-carrossel">
                  <img className="img-carrossel" src={Carrossel4} alt="Carrossel 4" />
                  <div className="dependencias-carrossel">
                     <div className="grid-dependencias">
                        <div className="carrossel-esquerda flex-direction-column">
                           <h2 className="fonte-1 carrossel-fonte-azul"> Chegou nossa nova coleção </h2>
                           <h1 className="fonte-2 carrossel-fonte-laranja"> Venha conferir! </h1>
                        </div>

                        <div className="carrossel-direita flex-direction-row alinhar-meio">
                           <button className="botao-carrossel" type="button"> Visitar a loja </button>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="nav-automatica">
                  <div className="botao-auto" id="botao-auto-1"></div>
                  <div className="botao-auto" id="botao-auto-2"></div>
                  <div className="botao-auto" id="botao-auto-3"></div>
                  <div className="botao-auto" id="botao-auto-4"></div>
               </div>
            </div>

            <div className="nav-manual">
               <label className="botao-manual" htmlFor="radio1"></label>
               <label className="botao-manual" htmlFor="radio2"></label>
               <label className="botao-manual" htmlFor="radio3"></label>
               <label className="botao-manual" htmlFor="radio4"></label>
            </div>
         </section>
      </main>
   );
}