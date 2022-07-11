import knex from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const varejaoDB = knex({
  client: process.env.VAREJAO_DATABASE_CLIENT,
  connection: {
    host: process.env.VAREJAO_DATABASE_HOST,
    user: process.env.VAREJAO_DATABASE_USER,
    password: process.env.VAREJAO_DATABASE_PASS,
    database: process.env.VAREJAO_DATABASE_NAME,
    port: Number(process.env.VAREJAO_DATABASE_PORT),
  },
  pool: { min: 2, max: 10 },
})

export default varejaoDB
