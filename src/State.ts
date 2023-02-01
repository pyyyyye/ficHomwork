import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

export interface ILoginType {
  id: string;
  name: string;
}
const { persistAtom } = recoilPersist(); // 새로고침해도 로그인 정보 유지

export const LoginState = atom<ILoginType>({
  key: "userInfoState",
  default: { id: "", name: "" },
  effects_UNSTABLE: [persistAtom],
});
