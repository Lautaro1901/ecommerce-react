import { BrowserRouter } from "react-router-dom";
import CustomProvider from "./CustomProvider";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";



const App = () => {
  return (
    <CustomProvider>
      <BrowserRouter>
        <Header/>
        <Main/>
        <Footer/>
      </BrowserRouter>
    </CustomProvider>
  )
}

export default App;
