import Home from './pages/Home';
import About from './pages/About';
import AIServices from './pages/AIServices';
import RandomThoughts from './pages/RandomThoughts';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import EnterpriseSoftware from './pages/EnterpriseSoftware';
import BlogPost from './pages/BlogPost';
import AdminContactRequests from './pages/AdminContactRequests';


export const PAGES = {
    "Home": Home,
    "About": About,
    "AIServices": AIServices,
    "RandomThoughts": RandomThoughts,
    "SoftwareDevelopment": SoftwareDevelopment,
    "EnterpriseSoftware": EnterpriseSoftware,
    "BlogPost": BlogPost,
    "AdminContactRequests": AdminContactRequests,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
};