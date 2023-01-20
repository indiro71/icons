import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function RequirementSpecificationIcon({
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
        <radialGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 1.00484 0 -.034)"
          r={2.672}
          fy={7}
          fx={15}
          cy={7}
          cx={15}
          id="requirementSpecificationIcon_svg__b"
          xlinkHref="#requirementSpecificationIcon_svg__a"
        />
        <radialGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 1.00484 0 7.966)"
          r={2.672}
          fy={7}
          fx={15}
          cy={7}
          cx={15}
          id="requirementSpecificationIcon_svg__c"
          xlinkHref="#requirementSpecificationIcon_svg__a"
        />
        <radialGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 1.00484 -8 7.966)"
          r={2.672}
          fy={7}
          fx={15}
          cy={7}
          cx={15}
          id="requirementSpecificationIcon_svg__d"
          xlinkHref="#requirementSpecificationIcon_svg__a"
        />
        <radialGradient
          gradientUnits="userSpaceOnUse"
          gradientTransform="matrix(1 0 0 1.00484 -8 -.034)"
          r={2.672}
          fy={7}
          fx={15}
          cy={7}
          cx={15}
          id="requirementSpecificationIcon_svg__e"
          xlinkHref="#requirementSpecificationIcon_svg__a"
        />
        <linearGradient id="requirementSpecificationIcon_svg__a">
          <stop offset={0} stopColor="#8d8d8d" />
          <stop offset={1} stopColor="#353535" stopOpacity={0.835} />
        </linearGradient>
      </defs>
      <path
        d="M1 4.5V1h7v2H3v5H1zM14 1v2l.75-.016.75-.015 1.75.015L19 3v5h2V1l-1.25.016-1.25.015-2.25-.015z"
        fill="#3084ac"
      />
      <path d="M1 17.5V14h2v5h5v2H1zM14 20v-1h5v-5h2v7h-7z" fill="#2c7093" />
      <ellipse
        cx={15}
        cy={7}
        rx={2.672}
        ry={2.685}
        fill="url(#requirementSpecificationIcon_svg__b)"
      />
      <ellipse
        cx={15}
        cy={15}
        rx={2.672}
        ry={2.685}
        fill="url(#requirementSpecificationIcon_svg__c)"
      />
      <ellipse
        cx={7}
        cy={15}
        rx={2.672}
        ry={2.685}
        fill="url(#requirementSpecificationIcon_svg__d)"
      />
      <ellipse
        cx={7}
        cy={7}
        rx={2.672}
        ry={2.685}
        fill="url(#requirementSpecificationIcon_svg__e)"
      />
    </svg>
  );
}
export default RequirementSpecificationIcon;
