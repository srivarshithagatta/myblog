import './App.css';
import Navbar from './Navbar';
import Home from './Home';
const myvar=10;
const mylink="https://www.google.com";
function App() {
  return (
    <div className="App"> 
    <Navbar/>
    <Home/>
    <div className="content">Hello World {myvar}
    <a href={mylink}>mylink</a> </div> 
  </div>
  );
}

export default App;
