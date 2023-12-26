import { useRouter } from "next/router";

export default function ProductDetailPage() {
  const { query } = useRouter();
  return (
    <>
      <h1>Product</h1>
      <main>
        <h1>Product : {query.product}</h1>
      </main>
    </>
  );
}
