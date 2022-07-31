
import { NextApiRequest, NextApiResponse } from "next";
// lib
import jwt from "jsonwebtoken";

// Simple usage of JWT-Auth
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let {
        token
    } = req.body;
    const json = jwt.decode(token) as { [key: string]: string };
    if (json.admin) {
        res.json({
            secretAdminCode: 12345
        })
    } else {
        res.json({
            admin: false
        })
    }
}
