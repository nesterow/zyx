import type { FC, ReactNode } from "react";
import cn from "@xyz/ui/misc/cn";
import {
  dragLeaveHandler,
  dragOverHandler,
  dropHandler,
} from "@xyz/ui/misc/dragutils";

export type TabProps = {
  id: string;
  children: ReactNode;
  active?: boolean;
  disabled?: boolean;
  className?: string;
  dragGroup?: string;
  onActivate?: (id: string) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const Tab: FC<TabProps> = ({
  id,
  children,
  className,
  active = false,
  disabled,
  dragGroup = "t-drop",
  onDrop,
  onActivate,
  ...rest
}) => {
  if (active) {
    onActivate?.(id);
  }
  return (
    <div
      onDrop={disabled ? undefined : dropHandler(dragGroup, onDrop)}
      onDragLeave={disabled ? undefined : dragLeaveHandler(dragGroup)}
      onDragOver={disabled ? undefined : dragOverHandler(dragGroup)}
      onMouseUp={
        disabled
          ? undefined
          : () => {
              onActivate?.(id);
            }
      }
      className={cn(
        "group",
        active ? "active" : "",
        disabled ? "disabled" : "",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Tab;
