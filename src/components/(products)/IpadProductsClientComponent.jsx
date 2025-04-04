"use client";

const IpadProductsClientComponent = ({ data }) => {
  return (
    <ul className="grid grid-cols-4 gap-4">
      {data.products.map((product) => (
        <li key={product.id} className="border-[3px] border-white p-8 rounded-2xl max-w-[400px] hover:bg-white hover:text-[#b6ccda] hover:cursor-pointer">
          <article className="flex flex-col gap-4">
            <h3>{product.title}</h3>
            <p>{product.price} EUR</p>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default IpadProductsClientComponent;
