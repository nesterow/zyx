import { useState } from "react";

export function useList<T = unknown>(arr: T[], $current: T | null = null) {
  const [list, update] = useState(arr);
  const [current, setCurrent] = useState($current ? arr.indexOf($current) : 0);

  function moveAfter(target: T, item: T) {
    if (target === item) {
      return;
    }

    const filtered = list.filter((rec) => rec !== item);
    update([
      ...filtered.slice(0, list.indexOf(target)),
      target,
      item,
      ...filtered.slice(list.indexOf(target) + 1),
    ]);
  }

  function moveBefore(target: T, item: T) {
    if (target === item) {
      return;
    }

    const filtered = list.filter((rec) => rec !== item);
    update([
      ...filtered.slice(0, list.indexOf(target)),
      item,
      target,
      ...filtered.slice(list.indexOf(target) + 1),
    ]);
  }

  return {
    update,
    list,
    current,
    setCurrent,
    moveAfter,
    moveBefore,
  };
}
