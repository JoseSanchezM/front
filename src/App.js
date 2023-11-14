import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Register from "./component/register/register"
import Login from "./component/login/login";
import Home from "./component/home/home";
import {Logout} from './component/logout';
import Header from './component/header/header';
import Footer from './component/footer/footer';


function App() {
    return <BrowserRouter>
    <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/logout" element={<Logout/>}/>
            <Route path="/register" element={<Register/>}/>
        </Routes>
        <Footer/>
    </BrowserRouter>
}

export default App;
