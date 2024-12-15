import './App.css';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Login from './components/Login/Login';
import Chat from './components/Chat/Chat';

function App() {
 
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route exact path='/' element= {<Login/>}/>
        <Route path='/chat' element= {<Chat/>}/>

        </Routes>
      </Router>
    </div>
  );
}

export default App;
