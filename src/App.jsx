import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CreatePersopnal } from './CreatePersopnal';
import { ViewPersonal } from './ViewPersonal';

function App() {

  return (
  <>  
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CreatePersopnal/> }/>
          <Route path='/personal' element={ <ViewPersonal/> }/>
        </Routes>
      </BrowserRouter>
  </>
  );
}

export default App
