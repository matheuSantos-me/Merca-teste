import varejaoDB from '@database/varejao.db'

export const findUserByNameAndCellphone = async (name: string, cellphone: string) =>{ 
    const data = await varejaoDB.select().from("contacts").where({nome: name, celular: cellphone})

    return data
}

export const insertContact = async (name: string, cellphone: string) => await varejaoDB("contacts").insert({nome: name, celular: cellphone})