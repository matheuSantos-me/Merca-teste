import { Request, Response } from 'express'
import * as macapaServices from '@services/macapa'

export const importContacts = async (req: Request, res: Response) => {
  const fileContacts = req.file

  const data = await macapaServices.importContacts(fileContacts, req.headers.authorization)

  return res.status(data?.code).json({ ...data })
}