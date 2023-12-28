import { productType } from "@/types/product.type";
import Link from "next/link";

export default function ProductView({ products }: { products: productType[] }) {
  return (
    <div className="w-full ">
      <h1 className="text-center text-4xl font-bold ">Product</h1>
      <div className="flex px-9 py-0">
        {products.length > 0 ? (
          products.map((product: productType) => (
            <Link
              href={`/product/${product.id}`}
              key={product.id}
              className="w-1/4 p-2 mx-2 border border-gray-200 rounded-md shadow-md"
            >
              <img
                src={product.image}
                alt="Picture of the author"
                className="mb-4"
              />
              <h4 className="font-bold">{product.name}</h4>
              <p className="text-gray-600">{product.category}</p>
              <p className="font-bold mt-2">
                {product.price
                  .toLocaleString("id-ID", {
                    style: "currency",
                    currency: "IDR",
                  })
                  .replace(",00", "")}
              </p>
            </Link>
          ))
        ) : (
          <div className="w-1/4 m-2 p-2 border border-gray-200 rounded-md shadow-md animate-pulse">
            <div className="bg-gray-300 w-full h-96 rounded-md mb-4 aspect-square"></div>
            <div className="bg-gray-300 h-4 w-4/5 rounded-md mb-2"></div>
            <div className="bg-gray-300 h-4 w-3/4 rounded-md mb-4"></div>
            <div className="bg-gray-300 h-4 w-1/3 rounded-md mb-2"></div>
          </div>
        )}
      </div>
    </div>
  );
}
