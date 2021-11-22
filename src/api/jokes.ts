import { apiPath } from "./consts";

export const getJokes = async () => {
  const response = await fetch(`${apiPath}/search`, {
    headers: {
      Accept: "application/json",
    },
  });
  const { results } = await response.json();

  return results;
};
