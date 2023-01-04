import { AiOutlinePlus } from 'react-icons/ai';

const AddItem = ({ handleAdd, newItem, setNewItem }) => {
  return (  
    <form className='add-item'
      onSubmit={handleAdd}
    >
      <input type="text" 
        placeholder="Add Item"
        required
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
      />

      <button>
        <AiOutlinePlus />
      </button>
    </form>
  );
}
 
export default AddItem;