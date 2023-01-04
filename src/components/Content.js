import List from "./List";

const Content = ({ items, setItems, handleDelete, handleCheck }) => {
  return (  
    <main>
      {items.length ? (
        <List 
          items={items}
          setItems={setItems}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ) : <h2 style={{textAlign: 'center'}}>No Items</h2> }
    </main>
  );
}
 
export default Content;