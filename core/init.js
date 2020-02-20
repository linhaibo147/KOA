const Koa = require('Koa');
const app = new Koa();
const Router = require('koa-router')
//require-directory递归地遍历指定目录，返回包含这些模块的嵌套哈希结构。
const requireDirectory = require('require-directory');



class InitManager{
    static initCore(app){
        //入口方法
        InitManager.app = app;
        InitManager.initLoadRouters();
    }
    static initLoadRouters(){
        //实现路由自动加载

       //使用process.cwd()获取绝对路径
       const apiDirectory = `${process.cwd()}/app/api`
        requireDirectory(module,apiDirectory,{
            visit:whenLoadModule
        })
        function whenLoadModule(obj){
          
            if(obj instanceof Router){
             
                 InitManager.app.use(obj.routes())
            }
        
        }
    }
   
}

module.exports = InitManager