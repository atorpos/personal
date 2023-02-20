import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar background">
          <ul class="nav-list">
              <div class="logo"><img src="logo192.png" /></div>
              <li><a href="#home">Home</a></li>
              <li><a href="#aboutus">About Us</a></li>
          </ul>
      </nav>
      <header className="App-header">
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload. New site is coming.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
