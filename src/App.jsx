import Portfolio from "./components/Portfolio";
import { LanguageProvider } from "./providers/LanguageProvider";
import './css/app.css'

function App() {

  return (
    <LanguageProvider> 
      <Portfolio/>
    </LanguageProvider>
  )
}

export default App;
