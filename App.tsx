import { ContexProvider } from "./src/context/GlobalContext";
import HomeView from "./src/views/HomeView";

export default function App() {

  return (
    <ContexProvider>
      <HomeView></HomeView>
    </ContexProvider>
  );
}

