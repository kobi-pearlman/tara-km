export const fetchData = async (url) => {
  const res = await fetch("./dummyFilters");
  console.log(res);
};

export const convertArrayToMap = (array, idName) => {
  return array.reduce((acc, item) => {
    const parsedItem = JSON.parse(item);
    return { ...acc, [parsedItem[idName]]: parsedItem };
  }, {});
};

export const resultsFilter = (membersList, selectedFilters) => {
  if (!selectedFilters.length) return membersList;
  let filterdData = membersList;
  selectedFilters.forEach((filterItem) => {
    const { filterType, filterValue } = filterItem;
    filterdData = filterdData.filter((member) => {
      return member[filterType].includes(filterValue);
    });
  });
  console.log(filterdData);
  return filterdData;
};
