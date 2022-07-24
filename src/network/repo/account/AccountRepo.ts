import AppError from "../../../core/util/AppError";
import AccountApi from "../../api/account/AccountApi";
import UserInfoResultDto from "../../dto/UserInfoResultDto";

class AccountRepo {

  private accountApi: AccountApi;

  constructor(accountApi: AccountApi) {
    this.accountApi = accountApi;
  }

  public getUserInfo() {

    return new Promise<UserInfoResultDto>((resolve, reject) => {
      this.accountApi.getUserInfo().then(response => {

        if (response.status === 200) {
          resolve(response.data);
        } else {
          reject(new AppError("دریافت اطلاعات با خطا روبرو شد."));
        }

      }).catch((er) => {
        reject(new AppError("خطای سیستمی رخ داد"));
      })
    })

  }

}

export default AccountRepo;