import { AxiosError } from "axios";
import AppError from "../../../core/util/AppError";
import AuthApi from "../../api/auth/AuthApi";
import UserLoginDto from "../../dto/UserLoginDto";

class AuthRepo {

  private authApi: AuthApi;

  constructor(authApi: AuthApi) {
    this.authApi = authApi;
  }

  public login(userLoginDto: UserLoginDto): Promise<string> {

    return new Promise<string>((resolve, reject) => {

      this.authApi.auth(userLoginDto)
        .then(response => {

          if (response.status === 200) {
            resolve(response.data.result)
          } else {
            reject(new AppError("دریافت اطلاعات با خطا روبرو شد."))
          }

        })
        .catch((error: AxiosError) => {

          if (error.response?.status === 404) {
            reject(new AppError("نام کاربری یا رمز عبور اشتباه است."))
          } else {
            reject(new AppError('خطای سیستمی'))
          }

        })
        .catch(error => {
          reject(new AppError('خطای سیستمی'))
        })

    })

  }

}

export default AuthRepo;