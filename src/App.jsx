import './App.scss';
import {NavBar} from "./components/NavBar/NavBar";
import {BrowserRouter} from "react-router-dom";
import {AppContext} from "./context/context";
import {Footer} from "./components/Footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
    return (
        <>
            <AppContext>
                <BrowserRouter>
                    <NavBar className='wrapper'/>
                    <div className='main'>
                        <AnimatedRoutes/>
                    </div>
                    <Footer/>
                </BrowserRouter>
            </AppContext>
        </>
    )
        ;
}

export default App;
