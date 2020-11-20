import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';

test('should set default state', () => {
    const state = expensesReducer(undefined, { type : '@@INIT' });
    expect(state).toEqual([]);
});

test('should remove expense by id', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expenses if id not found', () => {
    const action = {
        type : 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('should add an expense', () => {
    const action = {
        type: 'ADD_EXPENSE',
        expense : {
            id: '4',
            description : 'Netflix bill',
            note : '',
            amount : 2500,
            createdAt : moment(0).add(20, 'days').valueOf()
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses,
        action.expense
    ]);
});

test('should edit an expense', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '3',
        updates : {
            note: 'November' 
        }
    }

    const state = expensesReducer(expenses, action);
    expect(state[2].note).toBe('November');
});

test('should not edit expense if expense not found', () => {
    const action = {
        type: 'EDIT_EXPENSE',
        id: '4',
        updates : {
            note: 'November' 
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([
        ...expenses
    ]);
});