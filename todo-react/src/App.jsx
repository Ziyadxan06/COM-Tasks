import { Route, Routes } from 'react-router-dom';
import { Find, Home} from './components';


function App() {
  return (
    <div className="App">
      

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/find' element={<Find />}></Route>
      </Routes>
    </div>

    
  );
}



export default App;
