import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function RequirementIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 22 22"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient id="requirementIcon_svg__a">
          <stop offset={0} stopColor="#9bdbfa" />
          <stop offset={1} stopColor="#36657d" />
        </linearGradient>
        <linearGradient
          gradientTransform="matrix(1.02213 0 0 1.02213 -.243 -.243)"
          gradientUnits="userSpaceOnUse"
          y2={18}
          x2={17}
          y1={5}
          x1={4}
          id="requirementIcon_svg__b"
          xlinkHref="#requirementIcon_svg__a"
        />
      </defs>
      <circle
        r={9.71}
        cx={11}
        cy={11}
        fill="url(#requirementIcon_svg__b)"
        stroke="#000"
        strokeWidth={0.579}
      />
      <circle
        r={5.197}
        cy={11}
        cx={11}
        fill="none"
        stroke="#000"
        strokeWidth={0.8}
      />
      <path d="M10.6 3h.8v16h-.8z" />
      <path d="M3 11.4v-.8h16v.8z" />
    </svg>
  );
}
export default RequirementIcon;
