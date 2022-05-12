import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddService from './components/AddService';
import GetServices from './components/GetServices';
import UpdateService from './components/UpdateService';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/addservice" element={<AddService />} />
        <Route path="/getservice" element={<GetServices />} />
        <Route path="/service/:id" element={<UpdateService />} />
      </Routes>
    </div>
  );
}

export default App;
