// fazer os imports
import { createContext, useState } from 'react';

// criar o context
export const CartContext = createContext([]);

// criar o provider
export const CartProvider = ({ children }) => {
	const [cart, setCart] = useState([
	]);

        // criar a lógica para adicionar
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

	// criar a lógica para remover
  const removeFromCart = (item) => {
    const newCatalogue = cart.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCart(newCatalogue);
  };

return (
  <CartContext.Provider
   value={{ cart, addToCart, removeFromCart }}>
	{children}
  </CartContext.Provider>
 )
}

