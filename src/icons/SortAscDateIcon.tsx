import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function SortAscDateIcon({
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
      <path d="M1.2 4.8h7.1v2.4H1.2V4.8zm0 14.3v-2.4h21.4v2.4H1.2zm0-8.3h14.3v2.4H1.2v-2.4zM18.404 7.262h-.869v.869h.87zm1.738 0h-.869v.869h.87zm1.738 0h-.869v.869h.87zm.87-3.042h-.435v-.869h-.87v.87H17.97v-.87h-.87v.87h-.434a.865.865 0 00-.864.868l-.005 6.083c0 .478.387.87.87.87h6.082a.872.872 0 00.87-.87V5.09a.872.872 0 00-.87-.869zm0 6.952h-6.084v-4.78h6.083z" />
    </svg>
  );
}
export default SortAscDateIcon;
