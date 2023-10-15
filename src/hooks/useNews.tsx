import { useQuery } from "@tanstack/react-query";
import { newsService } from "../api/newsService";
import { TNews } from "../types/news";

export const useNews = () => {
  return useQuery(["newsData"], newsService.getNews, {
    refetchInterval: 60 * 1000,
  });
};
