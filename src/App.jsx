import { HashRouter } from "react-router-dom"
import Rotas from "./routes"
import GlobalStyle from "./styles/GlobalStyles"

const App = () => (
  <HashRouter>
    <GlobalStyle />
    <Rotas />
  </HashRouter>
)

export default App
