export const generateToken=(user,msg,status,res)=>{
    const token=user.generateJsonWebToken()
    res.status(status).cookie("token",token,{
        expires:new Date(
            Date.now()+process.env.COOKIE_EXPIRE * 24*60*60*1000
        ),
        httpOnly:true,
    })
    .json({
        sccess:true,
        msg,
        user,
        token
    })
} 