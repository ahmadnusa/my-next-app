import ProductView from "@/views/product";
import { productType } from "@/types/product.type";

export default function ProductPage({ products }: { products: productType[] }) {
  return <ProductView products={products} />;
}
export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/product");
  const data = await res.json();
  return {
    props: {
      products: data.data,
    },
  };
}
