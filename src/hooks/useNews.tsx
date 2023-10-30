import { useQuery } from "@tanstack/react-query";
import { newsService } from "../api/newsService";

export const useNews = () => {
  return useQuery(["newsData"], newsService.getNews, {
    refetchInterval: 60 * 1000,
  });
};
