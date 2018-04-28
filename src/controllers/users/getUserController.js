import fetch from 'isomorphic-fetch'
import User from '../../models/user'

export default async function getUserController (req, res) {
  try {
    const user = await User.getUser(req.params.id)
    res.send(user)
  } catch (error) {
    // Dans la vraie vie il faudrait un vrai systeme de log
    console.log(error)
    res.sendStatus(500)
  }
}
