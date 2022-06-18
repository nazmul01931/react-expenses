import './ExpenseItem.css'
import Date from "./Date";
import Card from "./Card";
import './Card.css'
function ExpenseItem (props) {
    return (
        <Card className="expense-item">
            <Date date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    )
}

export default ExpenseItem
