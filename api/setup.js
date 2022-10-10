import Koa from 'Koa'
import bodyParser from 'koa-bodyparser'
import cors from '@Koa/cors'

import { router } from './router.js'

export const app = new Koa()

app.use(cors())
app.use(bodyParser())
app.use(router.routes())
app.use(router.allowedMethods())
