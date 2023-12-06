import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import About from './Components/About';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* <Route path={'/'} element={<Navigate to={'/Form '} />} /> */}
        <Route path={'/'} element={<Form />} />
        <Route path={'/About'} element={<About />} />
      </Routes>
    </>
  );
}

export default App;
