
import { NextApiRequest, NextApiResponse } from "next";
// lib
import jwt from 'jsonwebtoken';

const KEY = '34k3jkrj;erkelllllllllllllllrere';
// Simple usage of JWT-Auth
export default function handler(req: NextApiRequest, res: NextApiResponse) {
    let {
        username,
        password
    } = req.body;

    res.json({
        token: jwt.sign(
            {
                username,
                admin: username === "admin" && password === "admin",
            },
            KEY
        ),
    });
}
