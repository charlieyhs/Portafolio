import Portfolio from "./components/Portfolio";
import './css/utilities.css'
import './css/app.css'
import ThemeProvider from "./providers/ThemeProvider";

function App() {
  return (
    <ThemeProvider>
      <Portfolio />
    </ThemeProvider>
  )
}

export default App;
