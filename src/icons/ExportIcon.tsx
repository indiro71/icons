import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function ExportIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 192.026 192.026"
      overflow="visible"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <defs>
        <linearGradient id="exportIcon_svg__a">
          <stop offset={0} stopColor="#237f4c" />
          <stop offset={1} stopColor="#1e6c41" />
        </linearGradient>
      </defs>
      <rect
        width={171.5}
        height={134.5}
        x={13.5}
        y={28.026}
        ry={3.375}
        fill="#fff"
      />
      <path d="M104.269 131.287h29.253v15.027h-29.253zm35.25 0h29.253v14.996h-29.253zm-35.25-21.781h29.253v15.745h-29.253zm35.25 0h29.253v15.745h-29.253zm-35.25-21.75h29.253v15.745h-29.253zm35.25 0h29.253v15.745h-29.253zm-35.25-21.75h29.253v15.745h-29.253zm35.25 0h29.253v15.745h-29.253zm-35.25-21.75h29.253v15.745h-29.253zm35.25 0h29.253v15.745h-29.253zM103.25 26.281v5.969h78.281v126.781H103.25v6h77.781a6.532 6.532 0 006.531-6.531V32.812a6.532 6.532 0 00-6.53-6.53H103.25z" />
      <path d="M108.844 9.063L4.469 27.625v135.938l104.312 18.843.063-173.344zM75.469 65L60.53 95.719l15.344 30.906L62 125.812l-9.125-22.624-8.938 21.593-12.218-.687 14.343-28.375L32.438 67.03l13.218-.625 7.688 20.906 9.25-21.718L75.469 65z" />
    </svg>
  );
}
export default ExportIcon;
