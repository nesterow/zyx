import type { FC, ReactNode } from "react";
import {
  dragLeaveHandler,
  dragOverHandler,
  dropHandler,
} from "@xyz/ui/misc/dragutils";
import cn from "@xyz/ui/misc/cn";
import { useContext } from "react";
import { SeparatorContext } from "../separated/context";

export type TabSeparatorProps = {
  children?: ReactNode;
  className?: string;
  dragGroup?: string;
  index?: number;
} & React.HTMLAttributes<HTMLDivElement>;

export const tabsSeparatorClassName =
  "bg-none inline-flex items-center justify-center h-full";

export const TabSeparator: FC<TabSeparatorProps> = ({
  children,
  className,
  onDrop,
  dragGroup = "t-s-drop",
  ...rest
}) => {
  const onDropHandler = onDrop ? dropHandler(dragGroup, onDrop) : undefined;
  return (
    <div
      onDrop={onDropHandler}
      onDragLeave={dragLeaveHandler(dragGroup)}
      onDragOver={dragOverHandler(dragGroup)}
      className={cn(tabsSeparatorClassName, className)}
      {...rest}
    >
      {children}
    </div>
  );
};

export default TabSeparator;
