import axios from 'axios';
import UserInfoResultDto from '../../dto/UserInfoResultDto';

class AccountApi {

  private static INSTANCE: AccountApi;

  public static getInstance() {
    if (!this.INSTANCE) {
      this.INSTANCE = new AccountApi();
    }
    return this.INSTANCE;
  }

  constructor() { }

  public getUserInfo() {

    const response = axios.get<UserInfoResultDto>("https://www.google.com/search?q=hi");

    return response;

  }

}

export default AccountApi;