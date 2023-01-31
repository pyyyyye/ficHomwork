import { atom } from "recoil";
export interface ILoginType {
  id: string;
  pw: string;
}
export const LoginState = atom<ILoginType>({
  key: "userInfoState",
  default: { id: "", pw: "" },
});
