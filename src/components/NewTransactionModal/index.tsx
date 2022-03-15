import { FormEvent, useContext, useState } from "react";
import { TransactionContext } from "../../TransactionsContext";

import Modal from "react-modal";

import incomeImg from '../../assets/incomes.svg';
import buttonClose from '../../assets/buttonClose.svg'
import outcomeImg from '../../assets/outComes.svg';


import { Container, ContainerButtonTransaction, RadioBox } from "./styles";
interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionContext)

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [type, setType] = useState('deposit');

    async function handleCreateNewTransacion(event: FormEvent) {
        event.preventDefault();

        await createTransaction({
            title,
            amount,
            category,
            type
        })
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

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
                <img
                    src={buttonClose}
                    alt="Fechar modal"
                />
            </button>

            <Container onSubmit={handleCreateNewTransacion}>
                <h2>Cadastrar transação</h2>

                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />

                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <ContainerButtonTransaction>

                    <RadioBox
                        type="button"
                        className="button-transaction income"

                        onClick={() => setType('deposit')}
                        isActive={type === 'deposit'}
                        activeColor="green"
                    >
                        <img
                            src={incomeImg}
                            alt="Entrada"
                        />
                        <span>Entrada</span>

                    </RadioBox>

                    <RadioBox
                        type="button"
                        className="button-transaction outcome"

                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor="red"
                    >
                        <img
                            src={outcomeImg}
                            alt="Saida"
                        />
                        <span>Saída</span>
                    </RadioBox>

                </ContainerButtonTransaction>

                <input
                    type="text"
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />

                <button type="submit">
                    Cadastrar
                </button>
            </Container>
        </Modal>
    )
}