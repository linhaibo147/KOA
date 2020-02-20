const Router = require('koa-router');
const router = new Router();

//路径参传方式


/**
 * //路径参传方式
 * 1 url 
 * 2 url后面的？参数
 * 3 header
 * 4 body
 */

router.post('/v1/:id/classic/latest',(ctx,next)=>{
    const path = ctx.params
    const query = ctx.request.query;
    const headers = ctx.request.header;
    const body = ctx.request.body

  
    ctx.body = {
        key:'classic'
    }
})

module.exports = router