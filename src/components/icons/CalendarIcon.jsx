import * as React from "react";

function CalendarIcon({ fill = "white", ...rest }) {
  return (
    <svg
      width={24}
      height={24}
      fill="none"
      viewBox="0 0 448 512"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path d="M4 8H2v12a2 2 0 002 2h12v-2H4V8z" fill={fill} />
      <path
        d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
        fill={fill}
      />
    </svg>
  );
}

export default CalendarIcon;
