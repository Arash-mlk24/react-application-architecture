import UserLoginDto from "../../dto/UserLoginDto";
import UserLoginResultDto from "../../dto/UserLoginResultDto";
import AxiosInstance from "../../interceptor/AxiosInstance";

class AuthApi {

  private static INSTANCE: AuthApi;

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new AuthApi();
    }
    return this.INSTANCE;
  }

  constructor() { }

  public auth(body: UserLoginDto) {

    const response = AxiosInstance.post<UserLoginResultDto>("/api/Auth", body);

    return response;

  }

}

export default AuthApi;