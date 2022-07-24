import UserInfoResultDto from "../../network/dto/UserInfoResultDto";
import AccountRepo from "../../network/repo/account/AccountRepo";


class HomeController {

  private accountRepo: AccountRepo;

  constructor(accountRepo: AccountRepo) {
    this.accountRepo = accountRepo;
  }

  public getUserInfo(): Promise<UserInfoResultDto> {
    return this.accountRepo.getUserInfo();
  }


}

export default HomeController;