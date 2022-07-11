import { Express } from 'express'
import multer from "multer"

import middlewareAuthJWT from '@middleware/authJWT'

import uploadFiles from "@utils/uploadFiles";

import varejaoController from '@controllers/varejao'

const upload = multer(uploadFiles);

const varejao = (app: Express) => {
  const controller = varejaoController()

  app.route('/varejao/import/contacts').post(middlewareAuthJWT, upload.single("contacts"), controller.import.importContacts)
}

export default varejao