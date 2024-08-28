import './App.css';
import Create from './Component/Create';
import Read from './Component/Read';
import { BrowserRouter, Routes,Route} from 'react-router-dom';
import Update from './Component/Update';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Create/>}></Route>
        <Route path='/read' element={<Read/>}></Route>
        <Route path='/update' element={<Update/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
