import express from 'express'
import * as contact from '../db/contact'
import * as constraints from './constraints'
import { asyncMiddleware, validateBody } from '../utils'

export default function() {
  const router = express.Router()

  router.post(
    '/',
    validateBody(constraints.contact),
    asyncMiddleware(async (req, res) => {
      try {
        await contact.createContactWithInterests(
          req.body.name,
          req.body.email,
          req.body.interests,
        )
        res.json({ result: 'success' })
      } catch (e) {
        console.log(e)
        res.status(500).json({ result: 'failure', reason: 'internal-error' })
      }
    }),
  )

  router.get(
    '/interests',
    asyncMiddleware(async (req, res) => {
      try {
        const interests = await contact.findAllContactInterests()
        res.json({ result: 'success', interests })
      } catch {
        res.status(500).json({ result: 'failed', reason: 'internal-error' })
      }
    }),
  )

  router.use((req, res) => {
    res.status(404).json({ result: 'failed', reason: 'invalid-endpoint' })
  })

  return router
}
