import fetch from 'isomorphic-fetch'
import User from '../../models/user'

export default async function getUserController (req, res) {
  try {
    let user = await User.getUser(req.params.id)
    // Souci SQL ou entité introuvable : on sera gérés par le dernier callback
    // de rejet de promesse.
    if (!user) {
      res.sendStatus(404)
    }
    try {
      const beers = await fetch(`https://api.punkapi.com/v2/beers/?ids=${user.beer1}|${user.beer2}`).then((response) => response.json())
      user = user.toObject()
      user.beer1 = beers[0]
      user.beer2 = beers[1]
      res.send(user)
    } catch (error) {
      console.log(error)
      res.sendStatus(500)
    }
  } catch (error) {
    res.sendStatus(404)
  }
}
