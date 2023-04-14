import React, { useState } from "react";
// @ts-ignore
import CountUp from "react-countup";

import { useRef, useEffect } from "react";

export default function Counter() {
  const [counterOn, setcounterOn] = useState(false);
  useEffect(() => {
    
  }, []);
  return (


      <div>
        <CountUp start={0} end={100000} duration={3} />
      </div>


    
  );
}
