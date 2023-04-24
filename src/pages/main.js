import logo from '../icons/logo.svg';
import '../styling/main.css';

function Main() {
  return (
    <div className="main">
      <div className="main-body">
        <div className="main-navigation">
          <div className="main-navigation-links">
            <a href="./blog.js">Blog</a>
            <a href="./projects.js">Projects</a>
            <a href="./about.js">About</a>
          </div>
        </div>
      </div>
      <footer className="main-footer">
        <text className="footer-react-text">Built with React</text>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default Main;
