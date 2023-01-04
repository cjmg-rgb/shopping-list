const Header = ({ title }) => {
  return (  
    <header>
      {title}
    </header>
  );
}

Header.defaultProps ={
  title: 'Shopping List'
}
 
export default Header;