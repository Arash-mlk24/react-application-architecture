import HomeController from "../../controller/home/HomeController";
import LoginController from "../../controller/login/LoginController";
import AccountRepo from "../../network/repo/account/AccountRepo";
import AuthRepo from "../../network/repo/auth/AuthRepo";

class ControllerFactory {

  private accountRepo: AccountRepo;
  private authRepo: AuthRepo;

  constructor(accountRepo: AccountRepo, authRepo: AuthRepo) {
    this.accountRepo = accountRepo;
    this.authRepo = authRepo;
  }

  public getHomeController(): HomeController {
    return new HomeController(this.accountRepo);
  }

  public getLoginController(): LoginController {
    return new LoginController(this.authRepo);
  }

}

export default ControllerFactory;