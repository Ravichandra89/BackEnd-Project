class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        stack = ""
    ){
        super(message),
        this.statusCode = statusCode,
        this.data =  null,
        this.error = error,
        this.success = false,
        this.message = message

        if(stack) {
            this.stack = stack;
        } else {
            this.captureStackTrace(this,this.constructor);
        }
    }
}

export {ApiError}