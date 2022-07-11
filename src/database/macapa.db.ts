import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const macapaDB = knex({
  client: process.env.MACAPA_DATABASE_CLIENT,
  connection: {
    host: process.env.MACAPA_DATABASE_HOST,
    user: process.env.MACAPA_DATABASE_USER,
    password: process.env.MACAPA_DATABASE_PASS,
    database: process.env.MACAPA_DATABASE_NAME,
    port: Number(process.env.MACAPA_DATABASE_PORT),
  },
  pool: { min: 2, max: 10 },
})

export default macapaDB
