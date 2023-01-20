import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function WorkspaceIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M2 20a2 2 0 01-2-2V2a2 2 0 012-2h16a2 2 0 012 2v16a2 2 0 01-2 2H2z"
        fill="#5C6CFF"
      />
      <circle cx={12.5} cy={7.5} r={5} fill="#8C98FF" />
      <circle cx={8.75} cy={11.25} r={3.75} fill="#BDC4FF" />
      <circle cx={5} cy={15} r={2.5} fill="#fff" />
    </svg>
  );
}
export default WorkspaceIcon;
