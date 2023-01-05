import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Page1 from './Components/firstpage/Page1'
import { Routes, Route } from 'react-router-dom'
import Module1 from './Components/Module1/Module1';
import Module2 from './Components/Module2/Module2';
import Module3 from './Components/Module3/Module3';
import Module4 from './Components/Module4/Module4';
import Module5 from './Components/Module5/Module5';

function App() {
  return (
    <>
      <Navbar />
      <Page1 />
      <Routes>
        <Route path="/module1" element={<Module1 />}></Route>
        <Route path="/module2" element={<Module2 />}></Route>
        <Route path="/module3" element={<Module3 />}></Route>
        <Route path="/module4" element={<Module4 />}></Route>
        <Route path="/module5" element={<Module5 />}></Route>
      </Routes>
    </>
  );
}

export default App;
