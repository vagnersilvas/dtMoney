import { useContext} from 'react';
import { useTransaction } from '../../hooks/useTransactions';

import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outComes.svg';
import totalImg from '../../assets/total.svg';

import { Container } from "./styles";

export function Summary() {
  const { transactions } = useTransaction();

  const summary = transactions.reduce((acc, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposits += transaction.amount
      acc.total += transaction.amount
    } else {
      acc.withdraws += transaction.amount
      acc.total -= transaction.amount
    }

    return acc
  }, {
    deposits: 0,
    withdraws: 0,
    total: 0,
  })


  function formatAmountForCurrencyBRL(amount: number) {
    return new Intl.NumberFormat('pt-BR',
      {
        style: 'currency',
        currency: 'BRL'
      }
    ).format(amount)
  }

  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>
            {formatAmountForCurrencyBRL(summary.deposits)}
          </strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeImg} alt="Saídas" />
          </header>
          <strong>
            -{formatAmountForCurrencyBRL(summary.withdraws)}
          </strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>
            {formatAmountForCurrencyBRL(summary.total)}
          </strong>
        </div>
      </Container>
    </>
  );
}
