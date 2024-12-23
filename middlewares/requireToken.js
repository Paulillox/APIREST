import jwt from "jsonwebtoken";
import { tokenVerificationErrors } from "../utils/generateTokens.js";

export const requireToken = (req, res) => {
    try {
        let token = req.headers?.authorization;

        token = token.split(" ")[1];
        const { uid } = jwt.verify(token, process.env.JWT_SECRET);

        req.uid = uid;
    } catch (error) {
        console.log(error.message);
        return res
        .status(401)
        .send({ error: tokenVerificationErrors[error.message] });
    }
};