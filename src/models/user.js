// Modèle pour les utilisateurs
// ============================

import mongoose, { Schema } from 'mongoose'

// Le schéma qui va bien
const userSchema = new Schema({
  beer1: { type: Number, required: true },
  beer2: { type: Number, required: true },
  joinedAt: { type: Date, default: Date.now }
})

Object.assign(userSchema.statics, {
  post (fields) {
    return this.create(fields)
  }
})

const Model = mongoose.model('User', userSchema)

export default Model
