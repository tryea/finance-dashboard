import { ThemeProvider } from "@mui/material/styles"
import { useMemo } from "react"
import { themeSettings } from "./theme"
import { CssBaseline, createTheme } from "@mui/material"

function App() {
  const theme = useMemo(() => {
    return createTheme(themeSettings)
  }, [])

  return (
    <div className="app">
        <ThemeProvider theme={theme}>
          {/* 
            CssBaseline is used for reset all defaul css
            to default material UI style
          */}
          <CssBaseline />
        </ThemeProvider>
    </div>
  )
}

export default App
