import Portfolio from "./components/Portfolio";
import { LanguageProvider } from "./providers/LanguageProvider";
import './css/app.css'
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Portfolio />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App;
