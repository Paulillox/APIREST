import jwt from "jsonwebtoken";
export const generateToken = (uid) => {
    
    const expiresIn = '1h';
    
    try {
       const token = jwt.sign({uid}, process.env.JWT_SECRET, {expiresIn});
       return {token, expiresIn};
    } catch (error) {
        console.log(error);
    }
};

export const generateRefreshToken = (uid, res) => {
    const expiresIn = '24h';
    try {
        const refreshToken = jwt.sign({uid}, process.env.JWT_REFRESH, {expiresIn})
        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: !(process.env.MODO === "developer"),
            expires: new Date(Date.now() + expiresIn * 1000)
        });
    } catch (error) {
        console.log(error)
    }
}

export const errorsValidateToken = (error) => {
    switch (error) {
        case "invalid signature":
            return "firma no valida";
        case "jwt expired":
            return "token expirado";
        case "invalid token":
            return "token invalido";
        default:        
    }
};

export const tokenVerificationErrors = {
    "invalid signature": "La firma del JWT no es valida",
    "jwt expired": "JWT expirado",
    "invalid token": "Token invalido",
    "jwt malformed": "JWT formato no valido",
};