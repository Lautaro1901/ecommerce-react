import Header from "./Header";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <ItemListContainer greeting="Prueba de Greeting"/>
      <Footer/>
    </>
  )
}

export default App;
