import macapaDB from '@database/macapa.db'

export const findUserByNameAndCellphone = async (name: string, cellphone: string) =>{ 
    const data = await macapaDB.select().from("contacts").where({nome: name, celular: cellphone})

    return data
}

export const insertContact = async (name: string, cellphone: string) => await macapaDB("contacts").insert({nome: name, celular: cellphone})