


const koa = require('koa');
const cors = require('koa-cors');
const Router = require('./routes/index');
const body_parser = require('koa-bodyparser');
const koa_body = require('koa-body');
const json = require('koa-json');
const app = new koa();

app.use(cors())
app.use(koa_body());
app.use(body_parser({
    enableTypes: ['json'],
    jsonLimit: '5mb',
    strict: true,
    onerror: function (err, ctx) {
        ctx.throw('body parse error',422)
    }
}));
app.use(json());



app
    .use(Router.routes())
    .use(Router.allowedMethods())

module.exports = app 