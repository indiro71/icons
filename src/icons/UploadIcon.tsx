import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function UploadIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1024 1024"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M518.3 163.1c-2.7-3.5-7.8-4.1-11.2-1.4-.5.4-1 .9-1.4 1.4l-112 141.7c-4.1 5.2-.4 12.9 6.3 12.9h74.1v338.4c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.8H624c6.7 0 10.4-7.7 6.3-12.9l-112-141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z" />
    </svg>
  );
}
export default UploadIcon;
