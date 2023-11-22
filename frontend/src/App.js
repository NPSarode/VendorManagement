import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllVendors from './Components/AllVendors';
import Header from './Components/Header';
import Form from './Components/Form';
import { useEffect, useState } from 'react';
import ViewProfile from './Components/ViewProfile';

function App() {
  const [title,setTitle] = useState("All Venders")
  const [isEdit,setIsEdit] = useState(true)
  const [users, setUsers] = useState([])

  return (
    <>
    <Header title={title}/>
    <Routes> 
      <Route path='/' element={<AllVendors setTitle={setTitle} users={users} setIsEdit={setIsEdit}/>}></Route>
      <Route path='/addupdate/:id' element={<Form setTitle={setTitle} users={users} setUsers={setUsers} isEdit={isEdit}/>}></Route>
      <Route path='/view/:id' element={<ViewProfile />}></Route>
    </Routes>
    </>
  );
}

export default App;
