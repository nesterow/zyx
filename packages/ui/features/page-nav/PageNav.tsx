import type { FC } from "react";
import { useContext, useEffect, useState } from "react";

import { TabList, Tab, TabSeparator } from "@xyz/ui/components/tabs";
import { Scrollable } from "@xyz/ui/components/scrollable";

import cn from "@xyz/ui/misc/cn";

import "./PageNav.css";
import PageIcon from "./icons/Page";
import PlusIcon from "./icons/Plus";
import DotsIcon from "./icons/Dots";
import PageMenu from "./PageMenu";

import { SeparatorContext } from "@xyz/ui/components/separated/context";

export type TabModel = {
  id: string;
  label: string;
  disabled?: boolean;
  animate?: boolean;
};

export type PageNavProps = {
  items: TabModel[];
  activeId?: string | null;
  onActivate?: (id: string) => void;
  onInsert?: () => TabModel | Promise<TabModel>;
  onChange?: (items: TabModel[]) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export const PageNav: FC<PageNavProps> = ({
  items,
  activeId = null,
  onActivate,
  onInsert,
  onChange,
  className,
  ...rest
}) => {
  const [active, setActive] = useState(activeId);
  useEffect(() => {
    setActive(activeId);
  }, [activeId]);

  const [data, setData] = useState(items);
  useEffect(() => {
    setData(items);
  }, [items]);

  const insertItem = async (idx: number) => {
    const item: TabModel = (await onInsert?.()) ?? {
      id: Math.random().toString(),
      label: `New page ${data.length}`,
      animate: true,
    };
    const list = [...data.slice(0, idx), item, ...data.slice(idx)];
    setData(list);
    onChange?.(list);
  };

  const reorderItems = (dropId: string, targetId: string) => {
    const drop = data.findIndex((it) => it.id === dropId);
    const target = data.findIndex((it) => it.id === targetId);
    const list = data.slice();
    const item = list[drop];
    list.splice(drop, 1);
    item.animate = true;
    setData([...list.slice(0, target), item, ...list.slice(target)]);
    onChange?.(data);
  };

  const SeparatorButton = () => {
    const index = useContext(SeparatorContext);
    return (
      <a
        role="button"
        className="page-nav-s-insert"
        onClick={() => insertItem(index! + 1)}
      >
        <span>+</span>
      </a>
    );
  };

  return (
    <div role="navigation" className="flex w-full max-w-screen">
      <Scrollable x className="h-[34px]">
        <TabList
          className={cn("page-nav-wrap", className)}
          separator={
            <TabSeparator className="page-nav-s group">
              <div className="page-nav-s-line" />
              <SeparatorButton />
              <div className="page-nav-s-line" />
            </TabSeparator>
          }
          {...rest}
        >
          {data.map((item, index) => (
            <Tab
              disabled={item.disabled}
              draggable={!item.disabled}
              aria-disabled={!!item.disabled}
              onDrop={(ev) => {
                reorderItems(ev.dataTransfer.getData("text/plain"), item.id);
              }}
              onDragStart={(ev) => {
                ev.dataTransfer.setData("text/plain", item.id);
              }}
              key={item.id}
              id={item.id}
              className={cn(
                "group flex relative",
                active === item.id ? "active" : "",
                item.animate ? "animated" : "",
              )}
              onMouseDown={() => {
                setActive(item.id);
                onActivate?.(item.id);
              }}
              tabIndex={index}
              onAnimationEnd={() => {
                item.animate = false;
              }}
            >
              <div className="btn-drop-indicator">
                <div className="zone"></div>
              </div>
              <a
                role="button"
                className="page-nav-btn group-[.animated]:animate-[pulse_1s_ease-in-out]"
              >
                <PageIcon />
                {item.label}
                <PageMenu>
                  <span className="hidden group-[.active]:inline cursor-pointer">
                    <DotsIcon />
                  </span>
                </PageMenu>
              </a>
            </Tab>
          ))}
        </TabList>
      </Scrollable>
      <a
        role="button"
        onClick={() => insertItem(data.length - 1)}
        className="page-nav-btn standalone mx-3 min-w-[110px] w-[100px]"
      >
        <PlusIcon />
        Add page
      </a>
    </div>
  );
};

export default PageNav;
