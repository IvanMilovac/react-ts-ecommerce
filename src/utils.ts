export const stringSlicer = (s: string, len: number): string => {
  return `${
    s?.length > len ? s?.substring(0, len) + "..." : s?.substring(0, len)
  }`;
};
