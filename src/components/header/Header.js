const Header = () => {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <a href="#!" className="brand-logo">
          Info about movies and TV show
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/RKKon/React-mini-app-movies"
            >
              Repository
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
