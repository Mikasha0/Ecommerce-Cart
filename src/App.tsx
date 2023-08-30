import Navbar from "./component/Navbar/Navbar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Product from "./component/Product/Product";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";

function App() {
  const client = new QueryClient();

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
        <Product />
      </QueryClientProvider>
    </div>
  );
}

export default App;
