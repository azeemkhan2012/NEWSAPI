const apiKey = "df8b53a34bd84132b40390bc839d6414";
const baseUrl = "https://newsapi.org/v2/everything";
const queryParams = (params = {}) => {
  let query = "";
  const objectArray = Object.keys(params);
  objectArray.forEach((key) => {
    if (params[key] === "") {
      delete params[key];
    } else if (+params[key] === 0) {
      delete params[key];
    }
  });

  objectArray.forEach((key, i) => {
    query += `${i === 0 ? "?" : "&"}${key}=${params[key]}`;
  });
  return query;
};

export const CompleteUrl = (data) => {
  const paramsObject = { ...data, apiKey };
  const queryParam = queryParams(paramsObject);
  return `${baseUrl}${queryParam}`;
};
