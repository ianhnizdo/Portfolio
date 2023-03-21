import react from 'react';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Homepage from './components/HomePage'

export default function App() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Homepage />
        }
    ])

    return(
        <section className="App">
                        
        </section>
    )
}