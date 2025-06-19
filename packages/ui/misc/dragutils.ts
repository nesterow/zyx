// attach .drop
export function dragLeaveHandler(
  className: string,
  fn?: (ev: React.DragEvent<HTMLDivElement>) => void,
) {
  return (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    [
      ev.target as HTMLDivElement,
      (ev.target as HTMLDivElement).closest("[draggable]"),
    ].map((el) => {
      el?.classList.remove(className);
    });
    fn?.(ev);
  };
}

// remove .drop
export function dragOverHandler(
  className: string,
  fn?: (ev: React.DragEvent<HTMLDivElement>) => void,
) {
  return (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    [
      ev.target as HTMLDivElement,
      (ev.target as HTMLDivElement).closest("[draggable]"),
    ].map((el) => {
      el?.classList.add(className);
    });
    fn?.(ev);
  };
}

export const dropHandler = (
  className: string,
  fn?: (ev: React.DragEvent<HTMLDivElement>) => void,
) => {
  return (ev: React.DragEvent<HTMLDivElement>) => {
    ev.preventDefault();
    ev.stopPropagation();
    [
      ev.target as HTMLDivElement,
      (ev.target as HTMLDivElement).closest("[draggable]"),
    ].map((el) => {
      el?.classList.remove(className);
    });
    fn?.(ev);
  };
};
