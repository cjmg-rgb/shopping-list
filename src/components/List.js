import ListItem from "./ListItem";

const List = ({ items, handleDelete, handleCheck }) => {
  return (  
    <ul>
      {items.map(item => (
        <ListItem 
          item={item} 
          key={item.id} 
          handleCheck={handleCheck}
          handleDelete={handleDelete}/>
        ))}
    </ul>
  );
}
 
export default List;