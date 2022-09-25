import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import ChangeUser from "../pages/ChangeUser";
import ChangeValueUser from "../pages/ChangeValueUser";
import CreateUser from "../pages/Create";
import Main from "../pages/Main";
import Admin from "../pages/Admin";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Home />} />
            <Route path='/change' element={<ChangeUser />} />
            <Route path='/changevalue' element={<ChangeValueUser />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/main' element={<Main />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>

)

export default Router