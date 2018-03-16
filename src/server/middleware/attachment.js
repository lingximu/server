
module.exports = (option)  => async function attachment(ctx, next) {
    if(/(pdf|doc)$/.test(ctx.url)){
        ctx.attachment()
        return next();
    }else{
        return next();
    }
}