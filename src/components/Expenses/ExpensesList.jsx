import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = props => {
    return props.expenses.length ?
        props.expenses.map(ex => <ExpenseItem
                key={ex.id}
                title={ex.title}
                amount={ex.amount}
                date={ex.date}
            />
        ) : <h2 className='expenses-list__fallback'>No expenses found</h2>
}

export default ExpensesList;
