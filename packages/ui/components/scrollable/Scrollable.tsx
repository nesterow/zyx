import type { FC, ReactNode } from "react";

export type ScrollableProps = {
  children: ReactNode;
  x?: boolean;
  y?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const Scrollable: FC<ScrollableProps> = ({
  children,
  x,
  y,
  className,
  ...props
}) => {
  const hasDirection = x || y;

  const cn = [
    "inline-flex justify-start no-scrollbar position-relative max-w-full",
    hasDirection
      ? x
        ? "overflow-x-scroll"
        : "overflow-y-scroll"
      : "overflow-scroll",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};

export default Scrollable;
