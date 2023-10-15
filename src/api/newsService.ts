import { instance } from "./instance";
import { TNews } from "../types/news";
import { TComments } from "../types/comments";

export const newsService = {
  async getCurrentNews<T>(id: undefined | number | string): Promise<T> {
    const { data } = await instance.get(`/item/${id}.json`);

    return data;
  },

  async getNews() {
    const { data } = await instance.get<number[]>("/newstories.json");

    return await Promise.all(
      data.slice(0, 100).map(newsService.getCurrentNews<TNews>)
    );
  },
};
