import Modal from 'react-modal';
import entradaImg from '../../assets/entradas.svg';
import saidaImg from '../../assets/saidas.svg';
import fecharImg from '../../assets/fechar.svg';
import { Container, TransactionTypeConatiner } from './styles';

interface ModalNewTransactionProps {
  onCloseNewTransactionModal: () => void;
  onIsNewTransactionModalOpen: boolean;
}

Modal.setAppElement('#root');

export function ModalNewTransaction( {onIsNewTransactionModalOpen, onCloseNewTransactionModal}: ModalNewTransactionProps ){
    return(
        <Modal 
            isOpen={onIsNewTransactionModalOpen} 
            onRequestClose={onCloseNewTransactionModal}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
                type='button'
                onClick={onCloseNewTransactionModal}
                className="react-modal-close"
            >
                <img src={fecharImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Cadastrar transação</h2>
                <input type="text" placeholder='Título'/>
                <input type="number" placeholder='Valor'/>
                <TransactionTypeConatiner>
                    <button
                        type='button'
                    >
                        <img src={entradaImg} alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button
                        type='button'
                    >
                        <img src={saidaImg} alt="Saída" />
                        <span>Saída</span>
                    </button>
                </TransactionTypeConatiner>
                <input type="text" placeholder='Categoria'/>
                <button type="submit">Cadastrar</button>
            </Container>
        </Modal>
    )
}