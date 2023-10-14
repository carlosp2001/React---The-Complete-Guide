import ExpenseDate from './ExpenseDate';
import Card from './Card';

import './ExpenseItem.css';

function ExpenseItem(props) {

  return (
    <Card className={"expense-item"}>
      {/*Para poder insertar los elementos en un elemento personalizado debemos usar props.children para */}
      {/*conocer en que lugar debemos ubicar el archivo*/}
      <ExpenseDate date={props.date}/>
      <div className={"expense-item__description"}>
        <h2>{props.title}</h2>
        <div className={"expense-item__price"}>${props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem;