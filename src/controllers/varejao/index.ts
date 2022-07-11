import * as importController from './import'

const varejao = () => {
  const controller = {
    import: importController,
  }

  return controller
}

export default varejao