import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from "./Components/NavBar";
import Art from './Pages/art-page/Art';
import Design from './Pages/design-page/Design';
import Solver from './Pages/solver-page/Solver';
import Theory from './Pages/theory-page/Theory';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/sbc-solver' element={<Solver/>}/>
          <Route path='/design-section' element={<Design/>}/>
          <Route path='/theory-section' element={<Theory/>}/>
          <Route path='/art-section' element={<Art/>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
