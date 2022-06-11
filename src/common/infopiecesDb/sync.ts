import { getInfopiecesDbpath } from './initializeInfopiecesDb'

let ip_01: IInfopiece = {
  id: 0,
  infotext: "Today has been raining. It's June ...." ,
}

let infosToInsert: IInfopiece[] = []
infosToInsert.push(ip_01)

const insertIP = `
  INSERT INTO infopiecesDb (id, infotext)
  VALUES (ip.id, ip.infotext)`

let infopiecesDbpath = getInfopiecesDbpath()

let Database = require('better-sqlite3-multiple-ciphers')
const infopiecesDb = new Database(infopiecesDbpath, { verbose: console.log })

export const insertInfopiece = (ip: IInfopiece) => {
  infopiecesDb.prepare(insertIP).run(ip)
}

export const encryptNewDB = (db: typeof Database, key: string) => {
    db.pragma(`rekey='${key}'`);
    db.prepare('VACUUM').run();
    db.close();
}
