import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const balance: Balance = {
      income: 0,
      outcome: 0,
      total: 0
    };

    this.transactions.forEach((transation) => {
      balance.income += transation.type === 'income' ? transation.value : 0;
      balance.outcome += transation.type === 'outcome' ? transation.value : 0;
      balance.total += transation.type === 'income' ? transation.value : -transation.value;
    });
    return balance;
  }

  public create({ title, type, value }: Omit<Transaction, 'id'>): Transaction {
    const transaction = new Transaction({ title, type, value });
    this.transactions.push(transaction);
    return transaction;
  }
}

export default TransactionsRepository;
