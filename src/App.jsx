import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Footer } from './components/footer/Footer.jsx';
import { Dashboard } from './components/daashboard/Dashboard.jsx';
import { Headermy } from './components/header/Headermy.jsx';
import { About } from './components/about/About.jsx';
import { Contact } from './components/contact/Contact.jsx';
import { Pagenotnotfound } from './components/pagenotfound/Pagenotnotfound.jsx';
import { Try } from './components/try/Try.jsx';
import { Contactlist } from './components/contactlist/Contactlist.jsx';
import { Edit } from './components/edit/Edit.jsx';
import { Addblog } from './components/addblog/Addblog.jsx';
import { Blogdetails } from './components/blogdetails/Blogdetails.jsx';
import { Register } from './components/register/Register.jsx';
import { Login } from './components/login/Login.jsx';
import { Bloglist } from './components/bloglist/Bloglist.jsx';

function App() {
  return (
    <>
      <BrowserRouter>
        <Headermy />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="about-us" element={<About />} />
          <Route path="contact-us" element={<Contact />} />
          <Route path="add-blog" element={<Addblog />} />
          {/* <Route path="try" element={<Try />} /> */}
          <Route path="contact-list" element={<Contactlist />} />
          <Route path="edit/:id" element={<Edit />} />
          <Route path="blog-detail/:id" element={<Blogdetails />} />
          <Route path="sign-up" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="blog-list" element={<Bloglist />} />
          <Route path="*" element={<Pagenotnotfound />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
