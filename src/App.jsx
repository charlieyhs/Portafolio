import Portfolio from "./components/Portfolio";
import { LanguageProvider } from "./providers/LanguageProvider";

function App() {

  return (
    <LanguageProvider> 
      <Portfolio/>
    </LanguageProvider>
  )
}

export default App;
