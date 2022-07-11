import server from '@config/express'

const app = server()
const port = app.get('port')

app.listen(port, () => {
  console.log(`🚀 Banco de dados macapa rodando em ${process.env.MACAPA_DATABASE_HOST}`)
  console.log(`🚀 Banco de dados varejao rodando em ${process.env.VAREJAO_DATABASE_HOST}`)
  console.log(`🚀 Servidor rodando na porta ${port}`)
})
