import { apiPath } from "./consts";

export const getJokes = async () => {
  const response = await fetch(`${apiPath}/search`, {
    headers: {
      Accept: "application/json",
    },
  });
  if (!response.ok) {
    throw new Error("response was not ok");
  }
  const { results } = await response.json();

  return results;
};
