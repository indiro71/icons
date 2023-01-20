import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CalendarCheckIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M11 18.414l5.707-5.707-1.414-1.414L11 15.586l-2.293-2.293-1.414 1.414L11 18.414z" />
      <path
        clipRule="evenodd"
        d="M19 4h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm.002 16H5V10h14l.002 10zM19 8V6H5v2h14z"
      />
    </svg>
  );
}
export default CalendarCheckIcon;
