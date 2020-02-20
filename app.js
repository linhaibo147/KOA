const Koa = require('Koa');
const app = new Koa();
const Router = require('koa-router')
const InitManager = require('./core/init')

const parser = require('koa-bodyparser')


//项目绝对路径方法
process.cwd()
app.use(parser())
InitManager.initCore(app);


app.listen(3000)