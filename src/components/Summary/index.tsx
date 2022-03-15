import { useContext, useEffect, useState } from 'react';
import incomeImg from '../../assets/incomes.svg';
import outcomeImg from '../../assets/outComes.svg';
import totalImg from '../../assets/total.svg';
import { TransactionContext } from '../../TransactionsContext';


import { Container } from "./styles";

export function Summary() {
  const { transactions } = useContext(TransactionContext)

  const [entries, setEntries] = useState(0)
  const [expenses, setExpense] = useState(0)
  const [total, setTotal] = useState(0)

  function typeAmount(arg: string) {
    const total = transactions
      .filter(transaction => transaction.type === arg)
      .reduce((acc, transaction) => {
        return acc + transaction.amount
      }, 0)
    return total
  }

  function amountFromCurrencyBRL(amount: number) {
    return new Intl.NumberFormat('pt-BR',
      {
        style: 'currency',
        currency: 'BRL'
      }
    ).format(amount)
  }

  useEffect(() => {
    setExpense(typeAmount('withdraw'))
    setEntries(typeAmount('deposit'))

  }, [transactions])

  useEffect(() => {
    setTotal(entries - expenses)
  }, [entries, expenses])

  return (
    <>
      <Container>
        <div>
          <header>
            <p>Entradas</p>
            <img src={incomeImg} alt="Entradas" />
          </header>
          <strong>
            {amountFromCurrencyBRL(entries)}
          </strong>
        </div>
        <div>
          <header>
            <p>Saídas</p>
            <img src={outcomeImg} alt="Saídas" />
          </header>
          <strong>
            -{amountFromCurrencyBRL(expenses)}
          </strong>
        </div>
        <div className="highlight-background">
          <header>
            <p>Total</p>
            <img src={totalImg} alt="Total" />
          </header>
          <strong>
            {amountFromCurrencyBRL(total)}
          </strong>
        </div>
      </Container>
    </>
  );
}
