import fetcher from "@/utils/swr/fatcher";
import ProductView from "@/views/product";
import { useState } from "react";
import useSWR from "swr";

export default function ProductPage() {
  const [products, setProducts] = useState([]);

  const { data, error, isLoading } = useSWR("/api/product", fetcher);

  // useEffect(() => {
  //   fetch("/api/product")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProducts(data.data);
  //     });
  // }, []);

  return <ProductView products={isLoading ? [] : data.data} />;
}
