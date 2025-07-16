import "./App.css";
import Page from "./components/page";
import ThemeContextProvider from "./store/theme-context-provider";

function App() {
  return (
    <ThemeContextProvider>
      <Page />
    </ThemeContextProvider>
  );
}

export default App;
