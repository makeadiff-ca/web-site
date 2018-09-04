import { Request, Response, NextFunction, RequestHandler } from 'express'
import { validate } from 'validate.js'

export function asyncMiddleware(fn: RequestHandler) {
  return (req: Request, res: Response, next: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next)
}

export function validateBody(constraints: any) {
  return (req: Request, res: Response, next: NextFunction) => {
    const errors = validate(req.body, constraints)
    if (errors) {
      res.status(400).json({ result: 'failed', reason: 'validation', errors })
    } else {
      next()
    }
  }
}
