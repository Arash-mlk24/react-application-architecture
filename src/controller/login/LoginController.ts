import Keys from "../../core/static/Keys";
import AppError from "../../core/util/AppError";
import UserLoginDto from "../../network/dto/UserLoginDto";
import AuthRepo from "../../network/repo/auth/AuthRepo";


class LoginController {

  private authRepo: AuthRepo;

  constructor(authRepo: AuthRepo) {
    this.authRepo = authRepo;
  }

  public authenticate(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {

      const body: UserLoginDto = new UserLoginDto(username, password);

      this.authRepo.login(body).then(data => {
        localStorage.setItem(Keys.TOKEN, data)
        resolve(true)
      }).catch((er: AppError) => {
        reject(er)
      }).catch(er => {
        reject(new AppError("خطای سیستمی"))
      })

    })
  }


}

export default LoginController;