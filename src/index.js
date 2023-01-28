import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { UserProvider } from "./contexts/user.context";
import { PructsProvider } from "./contexts/products.context";
import { CartProvider } from "./contexts/cart.context";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
  <BrowserRouter>
       <UserProvider>
         <PructsProvider>
           <CartProvider>
            <App />
          </CartProvider>
         </PructsProvider>
       </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
