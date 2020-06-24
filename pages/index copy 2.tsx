import React, { ReactElement, useState, useEffect } from "react";

interface Props {}

function index({}: Props): ReactElement {
  const [val, setVal] = useState(0);

  useEffect(() => {
    console.log(1);
  });

  return <div>1213</div>;
}

export default index;
