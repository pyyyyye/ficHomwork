import React, { ChangeEvent, useState } from "react";
import { ScreenWrap, Container, Input, Button } from "components";
import { useRouter } from "next/router";
import { useSetRecoilState } from "recoil";
import { QueryClient, QueryClientProvider } from "react-query";
import { LoginState, ILoginType } from "@src/State";

const Login = () => {
  const setUserInfo = useSetRecoilState<ILoginType>(LoginState);
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const queryClient = new QueryClient();
  const router = useRouter();

  const onClick = ({ id, name }: { id: string; name: string }) => {
    if (id === "" || name === "") {
      alert("아이디 또는 이름을 확인하세요.");
    } else {
      setUserInfo({ id, name });
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
              type="texet"
              name="name"
              placeholder="이름을 입력하세요"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setName(e.target.value)
              }
              value={name}
            />
            <Button onClick={() => onClick({ id, name })}>로그인</Button>
          </div>
        </ScreenWrap>
      </Container>
    </QueryClientProvider>
  );
};

export default Login;
