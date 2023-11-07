import Home from "./src/views/Home/Home";
import {ContextProvider} from "./src/context/GlobalContext";

export default function App() {

    return (
        <ContextProvider>
            <Home></Home>
        </ContextProvider>
    );
};

