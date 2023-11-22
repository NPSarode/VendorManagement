import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllVendors from './Components/AllVendors';
import Header from './Components/Header';
import Form from './Components/Form';
import { useState } from 'react';

function App() {
  const [title,setTitle] = useState("All Venders")
  return (
    <>
    <Header title={title}/>
    <Routes> 
      <Route path='/' element={<AllVendors setTitle={setTitle}/>}></Route>
      <Route path='/addupdate' element={<Form setTitle={setTitle}/>}></Route>
    </Routes>
    </>
  );
}

export default App;
