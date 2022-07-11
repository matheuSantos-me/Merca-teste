import express, { Express } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

// Routes
import macapa from '@routes/macapa.routes'
import varejao from '@routes/varejao.routes'

export default (): Express => {
  const app = express()

  app.set('port', process.env.PORT || 3333)
  app.use(express.json())
  app.use(cors())

  // Initialize routes
  macapa(app)
  varejao(app)

  return app
}
