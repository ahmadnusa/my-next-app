import fetcher from "@/utils/swr/fatcher";
import DetailProductView from "@/views/DetailProduct.tsx";
import { log } from "console";
import { useRouter } from "next/router";
import useSWR from "swr";

export default function ProductDetailPage() {
  const { query } = useRouter();

  const { data, error, isLoading } = useSWR(
    `/api/product/${query.product}`,
    fetcher
  );

  const product = data?.data || {};
  return <DetailProductView product={product} />;
}
