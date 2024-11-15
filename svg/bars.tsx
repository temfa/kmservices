import React, { FC, MouseEventHandler } from "react";
type Props = {
  action: MouseEventHandler;
};

const Bars: FC<Props> = ({ action }) => {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={action}>
      <path d="M0 12H18V10H0V12ZM0 7H18V5H0V7ZM0 0V2H18V0H0Z" fill="black" />
    </svg>
  );
};

export default Bars;
