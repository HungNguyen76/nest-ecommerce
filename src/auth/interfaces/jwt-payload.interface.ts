export interface JwtPayload {
  email: string;
}

export interface ISignInResponse {
  _id: string;
  username: string;
  email: string;
  accessToken: string;
}
