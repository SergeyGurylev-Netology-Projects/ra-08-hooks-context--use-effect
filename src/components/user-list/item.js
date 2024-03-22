import classes from './list.module.css'

export default function Item(props) {

  return (
    <li key={props.id} className={classes["item"] + (props.isActive ? " "+classes["activeItem"] : "")} onMouseDown={() => props.onItemClick(props.id)}>
      <span>{props.name}</span>
    </li>
  )
}
