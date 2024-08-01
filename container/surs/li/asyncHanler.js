const asynchandler = (fn) => async( req, res, next) =>
{
    try{
        return await fn(req, res);
    } catch ( error) {
        next(error);
    }
}




export default asynchandler;