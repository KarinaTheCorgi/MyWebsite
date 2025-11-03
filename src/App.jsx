import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/home';
import About from './pages/about';
import Games from './pages/games';
import Socials from './pages/socials';
import Projects from './pages/projects';
import NotFound from './pages/notfound';

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/games" element={<Games/>}/>
                <Route path="/socials" element={<Socials/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/*" element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
    );
}