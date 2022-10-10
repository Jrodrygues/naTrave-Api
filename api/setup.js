import Koa from 'Koa'
import bodyParser from 'koa-bodyparser'
import cors from '@Koa/cors'

import { router } from './router.js'

export const api = new Koa()

api.use(cors())
api.use(bodyParser())
api.use(router.routes())
api.use(router.allowedMethods())
