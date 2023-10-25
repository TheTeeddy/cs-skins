import { NavigationBar } from "./components/NavBar";
import { MainPage } from "./components/MainPage";
import { GlobalStyle } from "./components/styles/styles";

import "./components/styles/styles"


function App() {
  return (
    <div style={{background: "#1e0024"}}>
      <GlobalStyle/>
      <NavigationBar/>
      <MainPage/>
    </div>
  )
}

export default App;
