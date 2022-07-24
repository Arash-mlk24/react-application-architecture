import AccountApi from "../../network/api/account/AccountApi";
import AuthApi from "../../network/api/auth/AuthApi";
import AccountRepo from "../../network/repo/account/AccountRepo";
import AuthRepo from "../../network/repo/auth/AuthRepo";
import ControllerFactory from "../factory/ControllerFactory";

class AppRepository {

  private accountApi: AccountApi;
  private authApi: AuthApi;

  private accountRepo: AccountRepo;
  private authRepo: AuthRepo;

  private controllerFactory: ControllerFactory;

  constructor() {

    this.accountApi = new AccountApi();
    this.authApi = new AuthApi();

    this.accountRepo = new AccountRepo(this.accountApi);
    this.authRepo = new AuthRepo(this.authApi);

    this.controllerFactory = new ControllerFactory(
      this.accountRepo,
      this.authRepo
    );

  }

  private static INSTANCE: AppRepository;

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new AppRepository();
    }
    return this.INSTANCE;
  }

  public getControllers(): ControllerFactory {
    return this.controllerFactory;
  }


}

export default AppRepository;