import react from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from './components/HomePage'
import About from './components/About';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
// import Resume from './components/Resume';
import Projects from './components/Projects';

export default function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />,
            errorElement: <ErrorPage />
        },
        {
            //I'll list the resume with the About section
            path: "/about",
            element: <About />
        },

        {
            path: "/contact",
            element: <Contact />,
        },
        {
            path: "/projects",
            element: <Projects />,
        }
    ])

    return(
        <section className="App">
                        
        </section>
    )
}