class Usuario {
  constructor(user, pass) {
    this.user = user;
    this.pass = pass;
    this.admin = false;
  }

  setAdmin(admin) {
    this.admin = admin;
  }

  isAdmin() {
    return this.admin;
  }

}

class Admin extends Usuario {
  constructor(user, pass) {
    super(user, pass);
    super.setAdmin(true);
  }

}

const User1 = new Usuario('email@teste.com', '1234');
const Admin1 = new Admin('email@teste.com', '1234');
console.log(User1.isAdmin());
console.log(Admin1.isAdmin());
