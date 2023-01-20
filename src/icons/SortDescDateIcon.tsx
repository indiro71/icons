import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SortDescDateIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M1.2 19.1h7.1v-2.4H1.2v2.4zm0-14.3v2.4h21.4V4.8H1.2zm0 8.4h14.3v-2.4H1.2v2.4zM18.456 15.546h-.869v.87h.87zm1.738 0h-.869v.87h.87zm1.738 0h-.869v.87h.87zm.87-3.041h-.435v-.87h-.87v.87h-3.475v-.87h-.87v.87h-.434a.865.865 0 00-.865.869l-.004 6.083c0 .478.387.869.87.869H22.8a.872.872 0 00.87-.87v-6.082a.872.872 0 00-.87-.87zm0 6.952h-6.084v-4.78h6.083z" />
    </svg>
  );
}
export default SortDescDateIcon;
