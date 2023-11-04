import { notAuth } from "./handle_errors";

export const isCheckAdmin = (req,res,next)=>{
    const {role_code} = req.user
    if(role_code !=='R1') return notAuth('required role admin',res)
    next();
}

export const isModerator = (req,res,next)=>{
    const {role_code} = req.user
    if(role_code !=='R1' && role_code !=='R2') return notAuth('required role admin or moderator',res)
    next();
}
