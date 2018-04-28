import fetch from 'isomorphic-fetch'
import User from '../../models/user'

export default async function createUserController (req, res) {
  try {
    // Parallélisation des appels a l'API pour aller plus vite
    const beers = await Promise.all([
      fetch('https://api.punkapi.com/v2/beers/random').then((response) => response.json()),
      fetch('https://api.punkapi.com/v2/beers/random').then((response) => response.json())
    ])
    const user = await User.post({
      beer1: parseInt(beers[0][0].id),
      beer2: parseInt(beers[1][0].id)
    })
    res.send(user)
  } catch (error) {
    // Dans la vraie vie il faudrait un vrai systeme de log
    console.log(error)
    res.sendStatus(500)
  }
}
