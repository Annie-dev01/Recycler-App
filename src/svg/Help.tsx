import React from "react";

function Help({
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width="39" height="34" viewBox="0 0 39 34" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M19.5 0.5C29.8125 0.5 38.25 7.06333 38.25 15.1667C38.25 23.27 29.8125 29.8333 19.5 29.8333C17.175 29.8333 14.9438 29.5033 12.8813 28.9167C7.40625 33.5 0.75 33.5 0.75 33.5C5.11875 29.2283 5.8125 26.35 5.90625 25.25C2.71875 22.6283 0.75 19.0717 0.75 15.1667C0.75 7.06333 9.1875 0.5 19.5 0.5ZM17.625 20.6667V24.3333H21.375V20.6667H17.625ZM17.625 17H21.375V6H17.625V17Z" fill="#0FA958"/>
    </svg>
  );
}

export default Help;
