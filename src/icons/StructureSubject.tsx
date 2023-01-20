import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function StructureSubject({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path d="M28 24c-.738 0-1.424.215-2.02.566l-6.547-6.549A3.944 3.944 0 0020 16c0-1.404-.73-2.638-1.829-3.352l1.56-4.676c.089.007.176.028.269.028 2.206 0 4-1.795 4-4 0-2.206-1.794-4-4-4s-4 1.794-4 4c0 1.405.73 2.637 1.829 3.352l-1.559 4.676c-.09-.007-.177-.028-.27-.028-2.206 0-4 1.794-4 4 0 .46.094.895.237 1.307L7.222 20.65A3.988 3.988 0 004 19c-2.206 0-4 1.795-4 4s1.794 4 4 4 4-1.795 4-4c0-.148-.028-.29-.044-.436l5.391-3.595A3.958 3.958 0 0016 20c.738 0 1.424-.215 2.02-.566l6.547 6.549A3.947 3.947 0 0024 28c0 2.205 1.794 4 4 4s4-1.795 4-4-1.794-4-4-4zM4 25c-1.103 0-2-.896-2-2s.897-2 2-2 2 .896 2 2-.897 2-2 2zm12-7c-1.103 0-2-.896-2-2s.897-2 2-2a2 2 0 010 4zm2-14a2 2 0 114.001.001A2 2 0 0118 4zm10 26a2 2 0 11.001-4.001A2 2 0 0128 30z" />
    </svg>
  );
}
export default StructureSubject;
