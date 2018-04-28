import fetch from 'isomorphic-fetch'
import User from '../../models/user'

export default async function getUserController (req, res) {
  try {
    let user = await User.getUser(req.params.id)
    const beers = await Promise.all([
      fetch(`https://api.punkapi.com/v2/beers/${user.beer1}`).then((response) => response.json()),
      fetch(`https://api.punkapi.com/v2/beers/${user.beer2}`).then((response) => response.json())
    ])
    user = user.toObject()
    user.beer1 = beers[0][0]
    user.beer2 = beers[1][0]
    res.send(user)
  } catch (error) {
    // Dans la vraie vie il faudrait un vrai systeme de log
    console.log(error)
    res.sendStatus(500)
  }
}
