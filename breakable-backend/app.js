


const koa = require('koa');
const Router = require('./routes/index');
const body_parser = require('koa-bodyparser');
const koa_body = require('koa-body');
const json = require('koa-json');
const app = new koa();

app.use(koa_body());
app.use(body_parser());
app.use(json());



app
    .use(Router.routes())
    .use(Router.allowedMethods())

module.exports = app 