import jwt from 'jsonwebtoken'
import {notAuth} from '../middlewares/handle_errors'


export const verify = (req,res,next) => {
    const token = req.headers.authorization
    if(!token){
        return notAuth('required authorization',res)
    }

    const accessToken = token.split(' ')[1]

    jwt.verify(accessToken,process.env.JWT_SECRET, (err,user) => {
        if(err) return notAuth('access token may be expired or invalid',res)
        req.user = user
    })

    next()
}