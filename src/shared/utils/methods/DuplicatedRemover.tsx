export function removeDuplicates<rType extends Record<string, any>>(
    data: rType[],
    key: keyof rType
  ):rType[] {
    let ids = new Set();
    let newData: rType[] = [];
    data.forEach((item) => {
      if (!ids.has(item[key])) {
        ids.add(item[key]);
        newData.push(item);
      }
    });
    return newData;
  }