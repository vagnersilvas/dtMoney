import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "./services/api";

interface Transaction {
  id: number,
  title: string,
  amount: number,
  type: string,
  category: string,
  createdAt: string
}

type TransactionsInput = Omit<Transaction, 'id' | 'createdAt'>
interface TransactionsProviderProps {
  children: ReactNode;
}
interface TransactionsContextData {
  transactions: Transaction[],
  createTransaction: (transaction: TransactionsInput) => Promise<void>;
}

export const TransactionContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({ children }: TransactionsProviderProps) {

  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api
      .get("transactions")
      .then((res) => res.data)
      .then((res) => setTransactions(res.transactions));
  }, []);

  async function createTransaction(transactionsInput: TransactionsInput) {
    const response = await api.post('/transactions', {
      ...transactionsInput,
      createdAt: new Date(),
    });
    const { transaction } = response.data;

    setTransactions([
      ...transactions,
      transaction
    ])
  }

  return (
    <TransactionContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionContext.Provider>
  )
}
