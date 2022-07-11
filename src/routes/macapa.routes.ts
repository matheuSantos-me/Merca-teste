import { Express } from 'express'
import multer from "multer";

import middlewareAuthJWT from '@middleware/authJWT'

import uploadFiles from "@utils/uploadFiles";

import macapaController from '@controllers/macapa'

const upload = multer(uploadFiles);

const macapa = (app: Express) => {
  const controller = macapaController()

  app.route('/macapa/import/contacts').post(middlewareAuthJWT, upload.single("contacts"), controller.import.importContacts)
}

export default macapa