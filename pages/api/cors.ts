
import { NextApiRequest, NextApiResponse } from "next";

// Simple usage of JWT-Auth
export default async function ahandler(req: NextApiRequest, res: NextApiResponse) {
    let fetchJWT = await fetch("https://jwt.io");
    let JWTRes = await fetchJWT;
    console.log("res", JWTRes);
    JWTRes.status === 200 ? res.json({
        message: "Successful!"
    }) : res.json({
        message: "Fail"
    });
}
