const Footer = ({ items }) => {
  return (  
    <footer>
      <p>{items.length} {items.length > 0 ? 'Items' : 'Item'} in this list</p>
    </footer>
  );
}
 
export default Footer;