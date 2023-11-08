import Index from "./src/views/Home";
import {ContextProvider} from "./src/context/GlobalContext";

export default function App() {

    return (
        <ContextProvider>
            <Index></Index>
        </ContextProvider>
    );
};

