import React from "react";
import { useRouter } from "next/router";
import { useRecoilValue } from "recoil";
import { LoginState, ILoginType } from "@src/State";

const Header = () => {
  const router = useRouter();
  const setUserInfo = useRecoilValue<ILoginType>(LoginState);

  return (
    <header className="border-b p-2 py-4">
      <div className="flex justify-between items-center">
        <h1
          className="font-bold cursor-pointer"
          onClick={() => router.push("home")}
        >
          농장관리시스템
        </h1>
        <span className="text-sm">
          {setUserInfo.name}({setUserInfo.id})님 반갑습니다.
        </span>
      </div>
    </header>
  );
};

export default Header;
