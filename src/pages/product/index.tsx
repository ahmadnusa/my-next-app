import { useEffect, useState } from "react";

type productType = {
  id: number;
  name: string;
  price: number;
  size: string;
};

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.data);
      });
  }, []);
  return (
    <>
      <div>
        <h1>Product Page</h1>
        <div>
          {products.map((product: productType) => (
            <div key={product.id}>
              <h2>{product.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
