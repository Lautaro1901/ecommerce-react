import { Route, Routes } from "react-router-dom";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Cart from "./Cart";
import Checkout from "./Checkout";


const Main = () => {
    return (
        <main className="main"> 
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/products" element={<ItemListContainer/>}/>
                <Route path="/categories/:categoria" element={<ItemListContainer/>}/>
                <Route path="/product/:id" element={<ItemDetailContainer/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/checkout" element={<Checkout/>}/>
                <Route path="*" element={<h1>404 Not Found</h1>}/>
            </Routes>
        </main>
    )
}

export default Main;

