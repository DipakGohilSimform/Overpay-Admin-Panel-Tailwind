import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./layout/themeProvider";
import { Router } from "./Router";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <div className="App">
        <RouterProvider router={Router} />
      </div>
    </ThemeProvider>
  );
}

export default App;
