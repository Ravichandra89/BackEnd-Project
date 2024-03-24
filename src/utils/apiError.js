class ApiError extends Error {
    constructor(
        statusCode,
        message = "Something went wrong",
        error = [],
        statck = ""
    ){
        super(message),
        this.statusCode = statusCode,
        this.data =  null,
        this.error = error,
        this.success = false,
        this.message = message

        if(statck) {
            this.stack = stack;
        } else {
            this.captureStackTrace(this,this.constructor);
        }
    }
}

export {ApiError}