import { Route } from './types'
import { info } from './handlers/info'
import { persons } from './handlers/persons'

export const routes: Route[] = [
  {
    method: 'get',
    path: '/info',
    middleware: [],
    handler: info,
  },
  {
    method: 'get',
    path: '/api/persons',
    middleware: [],
    handler: persons,
  },
]
