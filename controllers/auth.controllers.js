import { User } from "../models/User.js";
import jwt from "jsonwebtoken";
import { generateRefreshToken, generateToken } from "../utils/generateTokens.js";

export const register = async(req, res) => {
    const {email, password} = req.body;
    try {
        let user = await User.findOne({email});
        if(user) throw ({code: 11000});
        
        user = new User({email, password});
        await user.save();

        

        return res.json({ok: true});
    } catch (error) {
        console.log(error);
        if (error.code === 11000) {
            return res.status(400).json({ error: "Ya existe este usuario" })
        }
    }
};

export const login = async(req, res) => {
    try {
        const { email, password, } = req.body;

        let user = await User.findOne({ email });
        if(!user) 
            return res.status(403).json({ error: "No existe este usuario" });

        const respuestaPassword = await user.comparePassword(password);
        if(!respuestaPassword)
            return res.status(403).json({ error: "Contraseña incorrecta" });

        const {token, expiresIn} = generateToken(user.id);
        generateRefreshToken(user.id, res);

        return res.json({token, expiresIn});
    } catch (error) {
        console.log(error);
    }
};

export const infoUser = async (req, res) => {
    try {
        const user = await User.findById(req.uid).lean();
        return res.json({ email: user.email, uid: user.id });
    } catch (error) {
        
    }
};

export const refreshToken = (req, res) => {
    try {
        const refreshToken = req.cookies.refreshToken
        if(!refreshToken) throw new Error("No existe el token");

        const { uid } = jwt.verify(refreshToken, process.env.JWT_REFRESH);
        const {token, expiresIn} = generateToken(uid);

        return res.json({token, expiresIn});
    } catch (error) {
        console.log(error)
        const TokenVerificationErrors = {
            "invalid signature": "La firma del JWT no es valida",
            "jwt expired": "JWT expirado",
            "invalid token": "Token invalido",
            "jwt malformed": "JWT formato no valido",
        };

        return res
        .status(401)
        .send({ error: TokenVerificationErrors[error.message] });
    }
}