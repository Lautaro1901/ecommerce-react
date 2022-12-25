import Header from "./Header";
import Main from "./Main";
import ItemListContainer from "./ItemListContainer";
import Footer from "./Footer";

const App = () => {
  return (
    <>
      <Header/>
      <Main/>
      <ItemListContainer greeting="Nashe"/>
      <Footer/>
    </>
  )
}

export default App;
