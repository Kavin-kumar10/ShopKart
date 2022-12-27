import './App.scss';
import ListProvider from './Context/ListContext.jsx';
import Main from './Main';
import Details from './Components/Details/Details';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <ListProvider>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/details' element={<Details/>}/>
        </Routes>  
      </ListProvider>
    </div>
    </Router>
  );
}

export default App;
