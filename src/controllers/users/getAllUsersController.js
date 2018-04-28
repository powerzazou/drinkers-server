import User from '../../models/user'

export default async function getAllUsersController (req, res) {
  try {
    const users = await User.getAllUsers(req.params.id)
    // Souci SQL ou entité introuvable : on sera gérés par le dernier callback
    // de rejet de promesse.
    if (!users) {
      res.sendStatus(404)
    }
    // La pour le coup je n'ajoute pas la donnée des deux bières, sinon on va spammer l'API punk a chaque getAll
    res.send(users)
  } catch (error) {
    console.log(error)
    res.sendStatus(500)
  }
}
