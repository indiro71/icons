import * as React from "react";
interface SVGRProps {
  title?: string;
  titleId?: string;
}
function Bell({
  title,
  titleId,
  ...props
}: React.SVGProps<SVGSVGElement> & SVGRProps) {
  return (
    <svg
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={titleId}
      {...props}
    >
      {title ? <title id={titleId}>{title}</title> : null}
      <path
        d="M1 15v1H0v-1h1zm0-2.5H0l.629-.928L1 12.5zm11.5-1.046l-.386.923-.534-.223-.072-.575.992-.125zM15 12.5l.386-.923.614.923h-1zm0 2.5h1v1h-1v-1zM3.5 11.5l.992.124-.073.585-.548.22L3.5 11.5zm8-8l.394-.92.527.227.071.568-.992.125zM8 2l-.394-.92L8 .913l.394.169L8 2zM4.5 3.5l-.992-.124.07-.57.528-.225.394.919zm-2.5 9V15H0v-2.5h2zm14 0V15h-2v-2.5h2zm-3.114-1.968l2.5 1.045-.772 1.846-2.5-1.046.772-1.845zM15 16H1v-2h14v2zM3.871 12.428l-2.5 1-.742-1.857 2.5-1 .742 1.857zm7.637-.849l-1-7.954 1.984-.25 1 7.955-1.984.25zm-.402-7.16l-3.5-1.5.788-1.838 3.5 1.5-.788 1.838zm-2.712-1.5l-3.5 1.5-.788-1.838 3.5-1.5.788 1.838zm-5.886 8.457l1-8 1.984.248-1 8-1.984-.248zM6 17h4v2H6v-2z"
        fill="currentColor"
      />
    </svg>
  );
}
export default Bell;
