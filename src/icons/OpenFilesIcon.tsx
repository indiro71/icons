import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function OpenFilesIcon({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M384.83 450H156a50.17 50.17 0 01-50.11-50.11V98.11A50.17 50.17 0 01156 48h150.1a15 15 0 0110.61 4.39l113.84 113.88a15 15 0 014.39 10.61v223A50.17 50.17 0 01384.83 450zM156 78a20.13 20.13 0 00-20.11 20.11v301.78A20.13 20.13 0 00156 420h228.83a20.13 20.13 0 0020.11-20.11v-216.8L299.85 78z" />
      <path d="M419.94 191.88h-78.77a50.17 50.17 0 01-50.11-50.11V63a15 15 0 0130 0v78.77a20.13 20.13 0 0020.11 20.11h78.77a15 15 0 010 30zM324.84 300.45a14.92 14.92 0 01-10.6-4.4l-43.84-43.84-43.85 43.84a15 15 0 11-21.21-21.21l54.45-54.45a15 15 0 0121.21 0l54.45 54.45a15 15 0 01-10.61 25.61z" />
      <path d="M270.4 375a15 15 0 01-15-15V241a15 15 0 1130 0v119a15 15 0 01-15 15z" />
    </svg>
  );
}
export default OpenFilesIcon;
