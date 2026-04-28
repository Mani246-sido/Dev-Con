class ApiError extends Error{
    constructor(message="sommething went wrong",
        statusCode,
        errors=[],
        stack=""
    ){
        super(message);
        this.message=message;
        this.statusCode=statusCode;
        this.errors=errors;
        this.data=data;
        this.success=false;
        if(stack){
            this.stack=stack;
        }
        else{
            Error.captureStackTrace(this,this.constructor);
        }

}
}
export {ApiError};
