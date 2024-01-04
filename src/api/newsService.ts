import { instance } from "./instance";
import { TNews } from "../types/news";

export const getCurrentItems = async <T>(
  id: undefined | number | string
): Promise<T> => {
  const { data } = await instance.get(`/item/${id}.json`);

  return data;
};

export const getNews = async () => {
  const { data } = await instance.get<number[]>("/newstories.json");

  return await Promise.all(data.slice(0, 100).map(getCurrentItems<TNews>));
};
