import { atom } from "recoil";
export interface ILoginType {
  id: string;
  name: string;
}
export const LoginState = atom<ILoginType>({
  key: "userInfoState",
  default: { id: "", name: "" },
});
