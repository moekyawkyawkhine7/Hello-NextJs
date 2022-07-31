// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // We are using TypeScript so you can get a benefit of auto complete type hinting.
  // You can use this api for google auth or any kind of autheciation.
  // I think so, it can use as a proxy for CORS error.
  console.log(req.body);
  // res.status(400);
  // res.end("End!")
  // res.status(200).json({ name: 'John Doe' })
}
