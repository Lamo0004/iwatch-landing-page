export default async function Page() {
  const data = await fetch("https://dummyjson.com/products");
  const response = await data.json();
  const products = response.products;

  return (
    <section>
      <div className="flex justify-between items-end">
        <h1>iPad</h1>
        <h4 className="max-w-[400px]">En nærmest magisk enhed, du kan røre ved, tegne og skrive på.</h4>
      </div>
      <h1>Produkter</h1>
      <ul className="grid grid-cols-4 gap-4">
        {products.map((product) => (
          <li key={product.id} className="bg-white text-[#b6ccda] p-8 rounded-2xl max-w-[400px]">
            <article className="flex flex-col gap-4">
              <h3>{product.title}</h3>
              <p>{product.price} EUR</p>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
