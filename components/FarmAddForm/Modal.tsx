import { Portal } from "components";
import React from "react";

const Modal = ({
  farm,
  crop,
  mode,
  onClick,
}: {
  farm: string;
  crop: string;
  mode: boolean;
  onClick: () => void;
}) => {
  return (
    <Portal selector="_modal" backgroundClick={onClick}>
      <div className="p-4 flex flex-col items-center text-center gap-8">
        <div>
          <h1 className="text-lg font-bold pb-2">
            {mode ? "농장 추가 성공!" : "농장 추가 실패"}
          </h1>
          {mode ? (
            <span className="text-gray-600">
              {farm}의 {crop}추가완료
            </span>
          ) : (
            <span className="text-red-400">빈 칸을 모두 입력하세요.</span>
          )}
        </div>
        <button
          className="cursor-pointer w-full rounded-md p-1 bg-green-500 text-white hover:bg-green-600"
          onClick={onClick}
        >
          닫기
        </button>
      </div>
    </Portal>
  );
};

export default Modal;
