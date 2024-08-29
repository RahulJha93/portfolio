import "./App.css";
import Home from "./component/Home";
import { ThemeProvider } from "./components/ui/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Home />
    </ThemeProvider>
  );
}

export default App;
