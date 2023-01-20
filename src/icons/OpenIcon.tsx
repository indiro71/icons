import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function OpenIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M939.013 552.517L547.756 938.693 156.498 552.517h243.9v-10.163q-1.016-73.17-24.39-140.75t-64.532-123.476T212.9 180.06 85.36 115.528q78.252-30.488 162.6-30.488 90.447 0 171.747 36.077t142.276 98.577 97.052 145.324 36.077 177.336v10.163h243.901z" />
    </svg>
  );
}
export default OpenIcon;
