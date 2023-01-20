import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function HideContent({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 640 640"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <path
          d="M297 42.71v554.58L19.71 320 297 42.71z"
          id="hideContent_svg__a"
        />
        <path d="M322.49 42.71H623v86H322.49v-86z" id="hideContent_svg__b" />
        <path d="M322.49 277H623v86H322.49v-86z" id="hideContent_svg__c" />
        <path d="M322.49 511.29H623v86H322.49v-86z" id="hideContent_svg__d" />
      </defs>
      <use xlinkHref="#hideContent_svg__a" />
      <use xlinkHref="#hideContent_svg__b" fill="#1a141b" />
      <use xlinkHref="#hideContent_svg__c" fill="#1a141b" />
      <use xlinkHref="#hideContent_svg__d" fill="#1a141b" />
    </svg>
  );
}
export default HideContent;
