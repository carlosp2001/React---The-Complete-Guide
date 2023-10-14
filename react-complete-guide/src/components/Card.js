import './Card.css'

function Card(props) {
  // Los elementos personalizados no soportan className debemos asignar manualmente las clases
  // con el metodo props.className
  const classes = 'card ' + props.className;
  return <div className={classes}>{props.children}</div>
}

export default Card;