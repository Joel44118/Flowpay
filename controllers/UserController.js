class UserController {
  constructor(){}
  async getUsers(req, res) {
    res.send('Get users');
  }
}
module.exports = UserController;