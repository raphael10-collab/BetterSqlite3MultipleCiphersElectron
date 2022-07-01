import { Database } from 'better-sqlite3'

import * as path from 'path'

import { app } from 'electron'

export const getInfopiecesDbpath = () => {
  const isEnvDevelopment = process.env.NODE_ENV === 'development'

  const infopiecesDbpath = isEnvDevelopment
    ? path.join(app.getAppPath(), "src", "data", "infopieces")
    : path.join(app.getAppPath(), ".webpack", "data", "infopieces")
  return infopiecesDbpath
}

const createInfopiecesTable: any = "CREATE TABLE IF NOT EXISTS infopieces (id INTEGER PRIMARY KEY AUTOINCREMENT, infotext TEXT NOT NULL);"


const createInfopiecesIndex = "PRAGMA INDEX_LIST(infopieces);"
 
export function initializeInfopiecesDB(db: Database) {
  db.prepare(createInfopiecesTable).run()
  db.prepare(createInfopiecesIndex).get()
}
