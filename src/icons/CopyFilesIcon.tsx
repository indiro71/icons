import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function CopyFilesIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      data-name="Layer 1"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M24.89 6.61h-2.58V4.47A2.47 2.47 0 0019.84 2H6.78a2.47 2.47 0 00-2.47 2.47v18.45a2.47 2.47 0 002.47 2.47h2.91v1.81a2.8 2.8 0 002.8 2.8h12.4a2.8 2.8 0 002.8-2.8V9.41a2.8 2.8 0 00-2.8-2.8zM6.78 23.52a.61.61 0 01-.61-.6V4.47a.61.61 0 01.61-.6h13.06a.61.61 0 01.61.6v2.14h-8a2.8 2.8 0 00-2.8 2.8v14.11zm19 3.68a.94.94 0 01-.94.93H12.49a.94.94 0 01-.94-.93V9.41a.94.94 0 01.94-.93h12.4a.94.94 0 01.94.93z" />
      <path d="M23.49 13.53h-9.6a.94.94 0 100 1.87h9.6a.94.94 0 100-1.87zM23.49 17.37h-9.6a.94.94 0 100 1.87h9.6a.94.94 0 100-1.87zM23.49 21.22h-9.6a.93.93 0 100 1.86h9.6a.93.93 0 100-1.86z" />
    </svg>
  );
}
export default CopyFilesIcon;
