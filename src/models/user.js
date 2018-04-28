// Modèle pour les utilisateurs
// ============================

import mongoose, { Schema } from 'mongoose'

// Le schéma qui va bien
const userSchema = new Schema({
  beer1: { type: Number, required: true },
  beer2: { type: Number, required: true },
  joinedAt: { type: Date, default: Date.now } // pour info
})

Object.assign(userSchema.statics, {
  post (fields) {
    return this.create(fields)
  },
  getAllUsers () {
    return this.find().sort({
      joinedAt: -1
    })
  },
  getUser (id) {
    return this.findById(id)
  }
})
Object.assign(userSchema.methods, {
  update (fields) {
    return this.set(fields).save()
  }
})

const Model = mongoose.model('User', userSchema)

export default Model
