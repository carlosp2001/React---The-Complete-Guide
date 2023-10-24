import {useState} from "react";

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

import './ExpenseItem.css';

const ExpenseItem = props => {
  // const [title, setTitle] = useState(props.title);
  //
  // // let title = props.title;
  // //
  // // const clickHandler = () => {
  // //   title = 'Updated!'
  // // }
  //
  // const clickHandler = async () => {
  //   await setTitle('Updated!');
  //   console.log(title);
  // }

  return (
    <Card className={"expense-item"}>
      {/*Para poder insertar los elementos en un elemento personalizado debemos usar props.children para */}
      {/*conocer en que lugar debemos ubicar el archivo*/}
      <ExpenseDate date={props.date}/>
      <div className={"expense-item__description"}>
        <h2>{props.title}</h2>
        <div className={"expense-item__price"}>${props.amount}</div>
      </div>
      {/*<button onClick={clickHandler}>Change title</button>*/}
      <button>Change title</button>
    </Card>
  )
}

export default ExpenseItem;
