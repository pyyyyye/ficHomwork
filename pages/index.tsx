import React, { ChangeEvent, useState } from "react";
import { ScreenWrap, Container, Input, Button } from "components";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginState, ILoginType } from "@src/State";

const Login = () => {
  const setUserName = useSetRecoilState<ILoginType>(LoginState);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const queryClient = new QueryClient();
  const router = useRouter();

  const onClick = ({ id, pw }: { id: string; pw: string }) => {
    if (id === "" || pw === "") {
      alert("아이디 또는 비밀번호를 확인하세요.");
    } else {
      setUserName({ id, pw });
      router.push("home");
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <Container>
        <ScreenWrap>
          <div className="w-[90%] flex flex-col gap-2">
            <h1 className="font-bold text-xl">그린랩스 농장관리 서비스</h1>
            <Input
              type="text"
              name="id"
              placeholder="아이디를 입력하세요"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setId(e.target.value)
              }
              value={id}
            />
            <Input
              type="password"
              name="pw"
              placeholder="비밀번호를 입력하세요"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPw(e.target.value)
              }
              value={pw}
            />
            <Button onClick={() => onClick({ id, pw })}>로그인</Button>
          </div>
        </ScreenWrap>
      </Container>
    </QueryClientProvider>
  );
};

export default Login;
