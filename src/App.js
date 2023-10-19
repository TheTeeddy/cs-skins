import { NavigationBar } from "./components/navBar";
import { MainPage } from "./components/mainPage";
import { GlobalStyle } from "./components/styles/styles";

import "./components/styles/styles"


function App() {
  return (
    <>
      <GlobalStyle/>
      <NavigationBar/>
      <MainPage/>
    </>
  )
}

export default App;
