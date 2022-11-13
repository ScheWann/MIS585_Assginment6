import App from "../App"
import './index.css';
import Home from "../pages/Home/home.jsx"

import { BrowserRouter, Routes, Route } from "react-router-dom"

const BaseRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}></Route>
            <Route path="/home" element={<Home />}></Route>
        </Routes>
    </BrowserRouter>
)

export default BaseRouter;