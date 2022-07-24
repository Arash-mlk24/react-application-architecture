interface UserLoginResultDto {
  result: string;
  id: number;
  exception: null
  status: number;
  isCanceled: boolean;
  isCompleted: boolean;
  isCompletedSuccessfully: boolean;
  creationOptions: number;
  asyncState: null;
  isFaulted: boolean;
}

export default UserLoginResultDto;