import { ThemeProvider } from "../src/components/theme-provider.tsx"
import { TitleBar } from "./components/layout/titlebar.tsx"


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {
        <>
          <TitleBar/>
        </>
      }
    </ThemeProvider>
  )
}

export default App