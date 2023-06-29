// Write your code here
import './index.css'

const TodoItem = props => {
  const {itemDetails, changeOfFunc} = props
  const {id, title} = itemDetails

  const deleteOf = () => {
    changeOfFunc(id)
  }
  return (
    <li className="list-container">
      <div className="sub-container">
        <p className="paragraph">{title}</p>
        <button className="button" type="button" onClick={deleteOf}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
