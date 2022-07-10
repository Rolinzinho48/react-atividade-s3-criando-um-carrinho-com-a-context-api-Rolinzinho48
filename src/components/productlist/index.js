import Button from "../button";

import { useContext } from "react";

import { CatalogueContext } from "../../providers/catalogue";
import { CartContext } from "../../providers/cart";

import { Container, List} from "./style";

const ProductList = ({ type }) => {
  // type determinará se nosso componente será do tipo "catalogue" ou "cart"
  // veremos melhor como isso irá funcionar quando formos para nosso App.js
  const { catalogue } = useContext(CatalogueContext);
  const { cart } = useContext(CartContext);

  return (
    <div>
        <h1>{type.toUpperCase()}</h1>
        <Container>
            {type === "catalogue" &&
            catalogue.map((item, index) => (
                <List key={index}>
                    <span className="title">{item.name}</span>
                    <span className="price">{item.price}</span>
                    <Button type={type} item={item} />
                </List>
            ))}

            {type === "cart" &&
            cart.map((item, index) => (
                <List key={index}>
                    <span className="title">{item.name}</span>
                    <span className="price">{item.price}</span>
                    <Button type={type} item={item} />
                </List>
            ))}
        </Container>
   
    </div>
  );
};

export default ProductList;

