const Navbar = () => {
    const handleClick = (url) => {
      window.location.href = url;
    };
  
    return (
      <nav id="main-navbar" className="navbar">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="logo.png" alt="Your Logo" />
          </a>
        </div>
  
        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" onClick={() => handleClick('/')}>
              content
            </a>
            <a className="navbar-item" onClick={() => handleClick('#footer')}>
              Footer
            </a>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;