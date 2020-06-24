import React, { ReactElement, useState, useEffect } from "react";
import { Input, Container, Button, Box, Card, Switch } from "@material-ui/core";
interface Props {}

export default function index({}: Props): ReactElement {
  const [val, setVal] = useState(0);
  // const [switchState, setSwitchState] = useState(true);
  const [isShowIpt, setIsShowIpt] = useState(true);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
  });
  // useEffect(() => {
  //   effect

  //   return () => {
  //     cleanup
  //   }
  // })

  useEffect(() => {
    document.addEventListener(
      "keydown",
      (ev) => {
        var event = ev || event;
        if (event.keyCode == 13) {
          let ipt = document.querySelector(".MuiInput-input");
          console.log(ipt);
          // ipt.focus();
        }
      },
      false
    );

    // document.onkeydown = function (ev) {
    //   var event = ev || event;
    //   if (event.keyCode == 13) {
    //     let ipt = document.querySelector(".MuiInput-input");
    //     console.log(ipt);
    //     // ipt.focus();
    //   }
    // };
    return () => {
      console.log(2);
      document.removeEventListener("keydown", () => {});
    };
  });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsShowIpt(!isShowIpt);
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <div>
      <Card>
        {isShowIpt ? (
          <Input
            defaultValue={val}
            inputProps={{ "aria-label": "description" }}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              setVal(e.target.value);
            }}
          />
        ) : (
          <></>
        )}

        <Container maxWidth="sm"> {val}</Container>

        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            setVal(val + 1);
          }}
        >
          按钮
        </Button>

        <Switch
          checked={state.checkedA}
          onChange={handleChange}
          name="checkedA"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <Switch
          checked={state.checkedB}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
      </Card>
    </div>
  );
}
