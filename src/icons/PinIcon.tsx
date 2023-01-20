import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function PinIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M16.5 20.5L13 17l-3.5-3.5h4l5-4 2 2-4 5v4z"
        fill="currentColor"
      />
      <path
        d="M16.5 20.5l-.707.707L17.5 20.5h-1zm-7-7v-1l-.707 1.707.707-.707zm4 0v1h.35l.275-.22-.625-.78zm3 3l-.78-.625-.22.274v.351h1zm-4.207 1.207l3.5 3.5 1.414-1.414-3.5-3.5-1.414 1.414zm1.414-1.414l-3.5-3.5-1.414 1.414 3.5 3.5 1.414-1.414zm-1.414 0l-5 5 1.414 1.414 5-5-1.414-1.414zm5.582-7.574l-5 4 1.25 1.562 5-4-1.25-1.562zm1.844 2.156l-4 5 1.562 1.25 4-5-1.562-1.25zM13.5 12.5h-4v2h4v-2zm2 4v4h2v-4h-2zm5.707-5.707l-2-2-1.414 1.414 2 2 1.414-1.414zm-2-2l-1.5-1.5-1.414 1.414 1.5 1.5 1.414-1.414zm.586 3.414l1.5 1.5 1.414-1.414-1.5-1.5-1.414 1.414z"
        fill="currentColor"
      />
    </svg>
  );
}
export default PinIcon;
