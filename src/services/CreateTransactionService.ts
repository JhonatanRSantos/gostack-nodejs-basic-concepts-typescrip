import TransactionsRepository from '../repositories/TransactionsRepository';
import Transaction from '../models/Transaction';

class CreateTransactionService {
  private transactionsRepository: TransactionsRepository;

  constructor(transactionsRepository: TransactionsRepository) {
    this.transactionsRepository = transactionsRepository;
  }

  public execute({ title, type, value }: Omit<Transaction, 'id'>): Transaction {
    if (!title || !type || !value) {
      throw Error(`The params title, type and value can't be undefined, null or empty`);
    }

    if (Number.isNaN(Number(value))) {
      throw Error('The value should be number')
    }

    if (type === 'income') {
      return this.transactionsRepository.create({ title, type, value: Number(value) });
    } else {
      const balance = this.transactionsRepository.getBalance();
      if (balance.total < value) {
        throw Error(`The user hasn't balance for this transaction`);
      } else {
        return this.transactionsRepository.create({ title, type, value: Number(value) });
      }
    }
  }
}

export default CreateTransactionService;
