import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function FolderIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M3 18a2 2 0 01-2-2v-6a5 5 0 015-5h11a2 2 0 012 2v9a2 2 0 01-2 2H3z"
        fill="url(#folderIcon_svg__paint0_linear_487_4770)"
      />
      <path
        d="M1 3a1 1 0 011-1h6.465a1 1 0 01.832.445L11 5 9.297 7.555A1 1 0 018.465 8H1V3z"
        fill="#E09F00"
      />
      <path d="M1 10a2 2 0 012-2H1v2z" fill="#E09F00" />
      <defs>
        <linearGradient
          id="folderIcon_svg__paint0_linear_487_4770"
          x1={1.923}
          y1={11.5}
          x2={20.385}
          y2={11.5}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FFCF4D" />
          <stop offset={1} stopColor="#F4B509" />
        </linearGradient>
      </defs>
    </svg>
  );
}
export default FolderIcon;
