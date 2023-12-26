// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getDB } from "@/utils/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: boolean;
  statusCode: number;
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const data = await getDB("products");
  res.status(200).json({ status: true, statusCode: 200, data });
}