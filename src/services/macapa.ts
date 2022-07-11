import { readFile } from 'fs'
import dotenv from 'dotenv'

import * as contactsRepository from '@repositories/macapadb/contacts.repository'

dotenv.config()

/**
 * @description Import contacts for client macapá
 * @param fileContacts file contacts 
 * @returns
 */

 export const importContacts = async (fileContacts?: Express.Multer.File, token?: string) => {
    const importedUsers: Array<{name: string, cellphone: string}> = []

    if (token !== process.env.MACAPA_KEY_API) {
        return {
            code: 401,
            message: 'Usuário não autorizado.',
        }
    }

    const promise = await new Promise((resolve) => {
        readFile(String(fileContacts?.path), 'utf8', async (err, data) => {
            if (err) {
                resolve ({
                    code: 500,
                    message: 'Error ao extrair os dados do arquivo contatos'
                })
            }   
                
            const users = JSON.parse(data)
    
            for (const user of users?.contacts) {
                const cellphone = user.cellphone.replace(/^(\d{2})(\d{2})(\d{5})(\d{4})$/, "+$1 ($2) $3-$4")
                const findUser = await contactsRepository.findUserByNameAndCellphone(user.name.toUpperCase(), cellphone)
        
                if (!findUser.length) {
                    importedUsers.push({name: user.name, cellphone})
                    await contactsRepository.insertContact(user.name.toUpperCase(), cellphone)
                }
            }

            resolve({
                code: 200,
                message: 'Contatos importados com sucesso.',
                users: importedUsers,
                amoountImportedUsers: importedUsers.length
            })
        })
    })

    const resolvePromise = JSON.stringify(promise)
    const parsePromise = JSON.parse(resolvePromise)

    return { ...parsePromise }
}