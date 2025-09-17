import { ProductCard } from "../ProductCard";
import { Products } from "../../constants/productsConstants";

type productGridProps = {
  category: string;
};
export function ProductGrid({ category }: productGridProps) {
  const filteredProducts = Products.filter((product) => {
    return product.type === category;
  });

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
      {filteredProducts.map((product) => (
        <ProductCard key={`${category}-${product.id}`} product={product} />
      ))}
    </div>
  );
}
