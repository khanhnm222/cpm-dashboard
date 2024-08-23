import { IconProps } from "./types";

const IconHeart = ({width = '300px', height = '300px', className}: IconProps) => {
  return (
    <svg
      width={width}
      height={height}
      className={className}
      viewBox="0 0 16 16"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      fill="#E24A4A"
    >
      <rect width="16" height="16" id="icon-bound" fill="none" />
      <path d="M11.75,1C10.126,1,8.716,1.911,8,3.249C7.284,1.911,5.874,1,4.25,1C1.903,1,0,2.903,0,5.25C0,11,8,15,8,15s8-4,8-9.75 C16,2.903,14.097,1,11.75,1z" />
    </svg>
  );
};

export default IconHeart;
