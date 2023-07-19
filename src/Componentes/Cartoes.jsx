import Card from 'react-bootstrap/Card';
import { Botao } from './Botao';

export const Cartoes = (props) => {
    return (
        <Card>
            <Card.Img className="img-produto" variant={props.posicao} src={props.img} />
            <Card.Body>
                <Card.Title>
                    {props.titulo}
                </Card.Title>

                <Card.Text className={props.fonteClass}>
                    R$ {props.preco.toFixed (2).replace ('.', ',')}
                </Card.Text>

                <Botao titulo={props.tituloBotao} variante={props.botaoVariante} aoClicar={props.aoClicar} />
            </Card.Body>
        </Card>
    );
}