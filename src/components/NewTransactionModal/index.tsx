import Modal from "react-modal";
import { Container, ContainerButtonTransaction } from "./styles";
import buttonClose from '../../assets/buttonClose.svg'
import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outComes.svg';
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={buttonClose} alt="Fechar modal" />
            </button>

            <Container>
                <h2>Cadastrar transação</h2>

                <input
                    type="text"
                    placeholder="Título"
                />
                <input
                    type="number"
                    placeholder="Valor"
                />
                <ContainerButtonTransaction>
                    <button
                        type="button"
                        className="button-transaction income">
                        <img src={incomeImg}
                            alt="Entrada" />
                        <span>Entrada</span>
                    </button>
                    <button
                        type="button"
                        className="button-transaction outcome">
                        <img
                            src={outcomeImg}
                            alt="Saida" />
                        <span>Saída</span>
                    </button>
                </ContainerButtonTransaction>
                <input
                    type="text"
                    placeholder="Categoria" />
                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}