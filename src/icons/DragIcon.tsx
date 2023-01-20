import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function DragIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.5 4.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm4 0a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zM10.625 7.5a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM5.5 8.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25zm5.125 2.875a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zM5.5 12.625a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z"
        fill="#000"
      />
    </svg>
  );
}
export default DragIcon;
