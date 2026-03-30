import { ThemeProvider } from "../src/components/theme-provider.tsx"
import Layout from "./app/layout.tsx"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {
        <>
          <Layout/>
        </>
      }
    </ThemeProvider>
  )
}

export default App