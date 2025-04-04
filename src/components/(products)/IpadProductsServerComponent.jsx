import IpadProductsClientComponent from "./IpadProductsClientComponent";

const IpadProductsServerComponent = async () => {
  const data = await fetch("https://dummyjson.com/products");
  const products = await data.json();

  return <IpadProductsClientComponent data={products}></IpadProductsClientComponent>;
};

export default IpadProductsServerComponent;
