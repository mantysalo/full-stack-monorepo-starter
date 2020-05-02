import Koa from "koa";
import Router from "@koa/router";
import bodyParser from "koa-bodyparser";
import pino from "koa-pino-logger";

const app = new Koa();
const router = new Router();

app.use(pino());

router.get("/api/", (ctx) => {
  ctx.body = { data: "Hello from API." };
});

router.post("/api/test", (ctx) => {
  ctx.body = ctx.request.body;
});

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

export { app };
