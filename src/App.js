import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import Landing from "./pages/index";
import ChooseRegistration from "./pages/chooseRegistration";
import EmployerRegistration from "./pages/employerRegistration";
import FreelancerRegistration from "./pages/freelancerRegistration";
import CreateAccount from "./pages/createAccount";
import About from "./pages/about";
import Contact from "./pages/contact";
import Login from "./pages/login";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route exact path='/' element={<Landing />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/choose_registration' element={<ChooseRegistration />} />
                <Route path='/create_account' element={<CreateAccount />} />
                <Route path='/employer_create_profile' element={<EmployerRegistration />} />
                <Route path="/freelancer_create_profile" element={<FreelancerRegistration />} />
            </Routes>
        </Router>
    );
}

export default App;
