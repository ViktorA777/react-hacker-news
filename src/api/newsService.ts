import { instance } from "./instance";
import { TNews } from "../types/news";

export const newsService = {
   
  async getCurrentItems<T>(id: undefined | number | string): Promise<T> {
    const { data } = await instance.get(`/item/${id}.json`);

    return data;
  },

  async getNews() {
    const { data } = await instance.get<number[]>("/newstories.json");

    return await Promise.all(
      data.slice(0, 100).map(newsService.getCurrentItems<TNews>)
    );
  },
};
