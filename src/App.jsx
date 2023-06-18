import './App.scss';
import {NavBar} from "./components/NavBar/NavBar";
import { HashRouter} from "react-router-dom";
import {AppContext} from "./context/context";
import {Footer} from "./components/Footer/Footer";
import AnimatedRoutes from "./components/AnimatedRoutes/AnimatedRoutes";

function App() {
    return (
        <>
            <AppContext>
                <HashRouter>
                    <NavBar className='wrapper'/>
                    <div className='main'>
                        <AnimatedRoutes/>
                    </div>
                    <Footer/>
                </HashRouter>
            </AppContext>
        </>
    )
        ;
}

export default App;
