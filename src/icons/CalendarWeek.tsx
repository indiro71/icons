import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CalendarWeek({
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
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21 2H3a2 2 0 00-2 2v18a1 1 0 001 1h20a1 1 0 001-1V4a2 2 0 00-2-2zM3 1a3 3 0 00-3 3v18a2 2 0 002 2h20a2 2 0 002-2V4a3 3 0 00-3-3H3z"
        fill="#000"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M24 9H0V7h24v2z"
        fill="#000"
      />
      <path d="M10 2a2 2 0 114 0v2a2 2 0 11-4 0V2z" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13 4V2a1 1 0 10-2 0v2a1 1 0 102 0zm-1-4a2 2 0 00-2 2v2a2 2 0 104 0V2a2 2 0 00-2-2z"
        fill="#000"
      />
      <path d="M3 2a2 2 0 114 0v2a2 2 0 11-4 0V2z" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 4V2a1 1 0 00-2 0v2a1 1 0 002 0zM5 0a2 2 0 00-2 2v2a2 2 0 104 0V2a2 2 0 00-2-2z"
        fill="#000"
      />
      <path d="M17 2a2 2 0 114 0v2a2 2 0 11-4 0V2z" fill="#fff" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 4V2a1 1 0 10-2 0v2a1 1 0 102 0zm-1-4a2 2 0 00-2 2v2a2 2 0 104 0V2a2 2 0 00-2-2z"
        fill="#000"
      />
      <path
        d="M10.274 13.121c-.253 0-.38-.127-.38-.38v-.692c0-.254.127-.381.38-.381h4.782c.254 0 .38.127.38.38v.663c0 .2-.097.408-.292.627-.801.902-1.362 1.803-1.682 2.701-.32.898-.48 1.982-.48 3.252v.363c0 .254-.127.381-.381.381h-.88c-.253 0-.38-.127-.38-.38v-.159c0-1.41.232-2.596.697-3.556a13.73 13.73 0 011.863-2.819v-.023a4.716 4.716 0 01-.468.023h-3.159z"
        fill="#000"
      />
    </svg>
  );
}
export default CalendarWeek;
