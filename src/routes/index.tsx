import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from "../pages/Home";
import ChangeUser from "../pages/ChangeUser";
import ChangeValueUser from "../pages/ChangeValueUser";
import CreateUser from "../pages/Create";
import Main from "../pages/Main";
import Admin from "../pages/Admin";
import Balance from "../pages/Balance";
import { UploadDarf } from "../pages/UploadDarf";

const Router = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Home />} />
            <Route path='/balance' element={<Balance />} />
            <Route path='/change' element={<ChangeUser />} />
            <Route path='/changevalue' element={<ChangeValueUser />} />
            <Route path='/create' element={<CreateUser />} />
            <Route path='/main' element={<Balance />} />
            <Route path='/admin' element={<Admin />} />
            <Route path='/darf' element={<UploadDarf />} />
            <Route path='/' element={<Home />} />
        </Routes>
    </BrowserRouter>

)

export default Router