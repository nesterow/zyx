import type { FC, ReactNode } from "react";
import { SeparatorContext } from "./context";

export type SeparatedProps = {
  children: ReactNode[];
  separator: ReactNode;
  render?: (props: {
    item: ReactNode;
    index: number;
    separator: ReactNode;
    length: number;
  }) => ReactNode;
} & React.HTMLAttributes<HTMLDivElement>;

export const defaultRender: SeparatedProps["render"] = ({
  item,
  index,
  separator,
  length,
}) => {
  return (
    <SeparatorContext value={index}>
      {item}
      {index < length - 1 ? separator : null}
    </SeparatorContext>
  );
};

export const Separated: FC<SeparatedProps> = ({
  render = defaultRender,
  children,
  separator,
  ...rest
}) => {
  const items = children.flat().filter(Boolean);
  return (
    <div {...rest}>
      {items.map((item, index) =>
        render({
          item,
          index,
          separator,
          length: items.length,
        }),
      )}
    </div>
  );
};

Separated.displayName = "Separated";

export default Separated;
