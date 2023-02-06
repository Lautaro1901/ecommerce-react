import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";


const Main = () => {
    return (
        <main className="main"> 
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/products" element={<ItemListContainer/>}/>
                <Route path="/categories/:categoria" element={<ItemListContainer/>}/>
                <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
            </Routes>
        </main>
    )
}

export default Main;

