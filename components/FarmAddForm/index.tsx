import React, { ChangeEvent, useState } from "react";
import { Input, Button } from "components";
import axios from "axios";
import Modal from "./Modal";

const FarmAddForm = () => {
  const [farmName, setFarmName] = useState("");
  const [cropName, setCropName] = useState("");
  const [mdCtrl, setMdCtrl] = useState(false);
  const [mode, setMode] = useState(false);

  const onClick = async (farm: string, crop: string) => {
    await axios.post("/api/addfarm", { farm, crop });
    if (farm === "" || crop === "") {
      setMdCtrl(true);
      setMode(false);
    } else {
      setMdCtrl(true);
      setMode(true);
    }
  };

  return (
    <div className="flex flex-col gap-4 px-2">
      {mdCtrl && (
        <Modal
          farm={farmName}
          crop={cropName}
          mode={mode}
          onClick={() => setMdCtrl(false)}
        />
      )}
      <div className="flex flex-col gap-2">
        <div className="flex flex-col">
          <span>농장 명</span>
          <Input
            name="name"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setFarmName(e.target.value)
            }
          />
        </div>

        <div className="flex flex-col">
          <span>작물명</span>
          <Input
            name="name"
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setCropName(e.target.value)
            }
          />
        </div>
      </div>
      <Button onClick={() => onClick(farmName, cropName)}>저장</Button>
    </div>
  );
};

export default FarmAddForm;
