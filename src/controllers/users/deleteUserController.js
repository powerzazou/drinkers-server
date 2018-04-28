import User from '../../models/user'

export default async function deleteUserController (req, res) {
  try {
    const user = await User.getUser(req.params.id)
    if (!user) {
      console.log('pas d utilisateur...')
      res.sendStatus(404)
    }
    const body = req.body
    // On vérifie qu'on a bien le droit de supprimer l'utilisateur
    if (!body.beer1 || !body.beer2 || parseInt(body.beer1) !== user.beer1 || parseInt(body.beer2) !== user.beer2) {
      throw new Error('Invalid Request')
    }
    // OK ? suppression
    User.findByIdAndRemove(user.id).exec()
    res.sendStatus(200)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
