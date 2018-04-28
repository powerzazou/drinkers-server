// Connexion à mongoDB
// ===================

import mongoose from 'mongoose'
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/wazaaa')

const db = mongoose.connection
db.on('error', () => {
  console.error('✘ CANNOT CONNECT TO mongoDB DATABASE wazaaa!'.red)
})

export default function listenToConnectionOpen (onceReady) {
  if (typeof onceReady === 'function') {
    db.on('open', onceReady)
  }
}
