import { FaTrashAlt } from 'react-icons/fa';

const ListItem = ({ item, handleDelete, handleCheck }) => {
  return (  
    <li className='item'>
      <input type="checkbox"
        checked={item.checked}
        onChange={() => handleCheck(item.id)}
      />
      <label>{item.item}</label>
      <button
        onClick={() => handleDelete(item.id)}
      >
        <FaTrashAlt />
      </button>
    </li>
  );
}
 
export default ListItem;