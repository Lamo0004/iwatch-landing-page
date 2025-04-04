import IpadProductsServerComponent from "@/components/(products)/IpadProductsServerComponent";

export default function Page() {
  return (
    <section>
      <div className="flex justify-between items-end">
        <h1>iPad</h1>
        <h4 className="max-w-[400px]">En nærmest magisk enhed, du kan røre ved, tegne og skrive på.</h4>
      </div>
      <h1>Produkter</h1>
      <IpadProductsServerComponent></IpadProductsServerComponent>
    </section>
  );
}
