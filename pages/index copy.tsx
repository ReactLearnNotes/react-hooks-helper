import { useState } from "react";
import { Button } from "@material-ui/core";

interface IInfo {
  name: string;
  age: number;
}

const Index = () => {
  const [state, setstate] = useState(0);

  const [name, setName] = useState<string>("yayxs");
  const [info, setInfo] = useState<IInfo>({ name: "yayxs", age: 18 });

  const handleClick = () => {
    console.log(`按钮执行`);
    console.log(name);
    setstate(1);
  };

  return (
    <>
      展示一下State : {state}
      <Button color="primary" onClick={handleClick}>
        点我直接别墨迹
      </Button>
    </>
  );
};
export default Index;
