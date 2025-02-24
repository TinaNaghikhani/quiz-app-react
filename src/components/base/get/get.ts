 import { BASE_URL_CATEGORY, BASE_URL_QUIZ } from "../const";

export const getQuizData = async (
  count: number,
  category: string,
  difficulty: string
) => {
  const response = await fetch(
    `${BASE_URL_QUIZ}?amount=${count}&category=${category}&difficulty=${difficulty}&type=multiple`
  );
  const data = await response.json();
    console.log(data)
  return data.results;
  
};

export const getCategory = async () => {
  const category = await fetch(`${BASE_URL_CATEGORY}`);
  const res = await category.json();
  return res.trivia_categories;
};
