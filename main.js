const Koa = require('koa')
const serve = require('koa-static')
const app = new Koa()
// app.use(serve('~/www/front-end/koaapp-frontend/dist'))
app.use(serve('./dist'))
// app.use(async ctx => {
//	ctx.body = 'hello koa'
//})

app.listen(3000)
