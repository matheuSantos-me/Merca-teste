import { Request, Response } from 'express'
import * as varejaoServices from '@services/varejao'

export const importContacts = async (req: Request, res: Response) => {
  const fileContacts = req.file

  const data = await varejaoServices.importContacts(fileContacts, req.headers.authorization)

  return res.status(data?.code).json({ ...data })
}