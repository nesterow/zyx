export const cn = (
  ...classNames: (undefined | string | (string | undefined)[])[]
) => classNames.flat().filter(Boolean).join(" ");
export default cn;
