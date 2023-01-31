import React, { useState, useEffect } from "react";
import axios from "axios";
import type { ProductionType, FarmsType } from "libs/type";
import FarmList from "./FarmList";

const Farm = () => {
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

  const onClick = (farmId: number, houseId: number) => {
    const resData = data.map((ele) => {
      return ele.id === farmId
        ? {
            ...ele,
            houses: ele.houses?.map((houseData) => {
              return houseId === houseData.id
                ? { ...houseData, active: !houseData.active }
                : { ...houseData };
            }),
          }
        : {
            ...ele,
          };
    });
    setData(resData);
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
            HouseActive={onClick}
          />
        );
      })}
    </div>
  );
};

export default Farm;
