import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
    return (
        <main className="main"> 
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/products" element={<p>Hola</p>}/>
                <Route path="/categories" element={<ItemListContainer/>}/>
                <Route path="/product/:id" element={<p>chau</p>}/>
            </Routes>
        </main>
    )
}

export default Main;

