import { BrowserRouter } from "react-router-dom"
import Rotas from "./routes"
import GlobalStyle from "./styles/GlobalStyles"

const App = () => (
  <BrowserRouter>
    <GlobalStyle />
    <Rotas />
  </BrowserRouter>
)

export default App
