import React, { useState, useEffect } from "react";
import axios from "axios";
import type { ProductionType, FarmsType } from "libs/type";
import FarmList from "./FarmList";

const Farm = () => {
  /* TODO: Q2-1 api 통신
  /* TODO: Q3-1 화면 조작
  - 호출 받은 데이터중 annualProduction 은 월별 생산량을 가지고 있습니다. 월별 생산량의 총 합을 구하는 함수를 작성해서 
    계산된 값을 FarmList 컴포넌트의 productionTotal Props 로 내려주세요
  /* TODO: Q3-2 화면 조작
  - 랜더링 된 컴포넌트에서 하우스를 동작시키는 함수를 작성해 주세요 역시 예시 이미지를 확인 하세요.
  */

  const [data, setData] = useState<Array<FarmsType>>([]);
  useEffect(() => {
    const farmsData = async () => {
      const result = await axios("/api/farm");
      setData(result.data.farms);
    };
    farmsData();
    console.warn("data :", data);
  }, []);

  const total = (production: Array<ProductionType>) => {
    const Production = production.map((ele) => {
      return ele.Production;
    });
    return Production.reduce((accumulator, curr) => accumulator + curr);
  };

  return (
    <div className="px-2 flex flex-col gap-2">
      {data.map((ele: FarmsType) => {
        return (
          <FarmList
            key={ele.id}
            id={ele.id}
            name={ele.name}
            crops={ele.crops}
            houses={ele.houses}
            productionTotal={total(ele.annualProduction)}
          />
        );
      })}
    </div>
  );
};

export default Farm;
