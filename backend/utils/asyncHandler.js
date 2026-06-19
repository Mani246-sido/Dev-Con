//created this to handler web request ..thats it 



const asyncHandler = (requestHandler) =>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err));

    }
}
export {asyncHandler}
