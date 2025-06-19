import type { FC, ReactNode } from "react";
import Separated from "../separated";
import type { SeparatedProps } from "../separated/Separated";

export type TabListProps = {
  children: ReactNode[];
  before?: ReactNode;
  after?: ReactNode;
  separator?: ReactNode;
  render?: SeparatedProps["render"];
} & React.HTMLAttributes<HTMLDivElement>;

export const TabList: FC<TabListProps> = ({
  render,
  children,
  before,
  after,
  separator,
  ...rest
}) => {
  return (
    <Separated render={render} separator={separator} role="tablist" {...rest}>
      {before}
      {children}
      {after}
    </Separated>
  );
};

export const TabsList = TabList;

export default TabList;
