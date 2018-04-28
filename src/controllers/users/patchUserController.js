import fetch from 'isomorphic-fetch'
import User from '../../models/user'

export default async function patchUserController (req, res) {
  try {
    const user = await User.getUser(req.params.id)
    if (!user) {
      console.log('pas d utilisateur...')
      res.sendStatus(404)
    }
    const body = req.body
    const fieldsToPatch = {}
    // Du coup avec ce pattern, on est forcé de mettre deux ids de bière valide, sinon erreur ...
    if (body.beer1) {
      try {
        const beer1Id = parseInt(body.beer1)
        const response = await fetch(`https://api.punkapi.com/v2/beers/${beer1Id}`).then((response) => response.json())
        if (response.statusCode) {
          throw new Error('Beer not found')
        }
        fieldsToPatch.beer1 = beer1Id
      } catch (error) {
        console.log(error)
        res.sendStatus(500)
      }
    }
    if (body.beer2) {
      try {
        const beer2Id = parseInt(body.beer2)
        const response = await fetch(`https://api.punkapi.com/v2/beers/${beer2Id}`).then((response) => response.json())
        if (response.statusCode) {
          throw new Error('Beer not found')
        }
        fieldsToPatch.beer2 = beer2Id
      } catch (error) {
        console.log(error)
        res.sendStatus(500)
      }
    }
    user.update(fieldsToPatch)
    res.json(user)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
