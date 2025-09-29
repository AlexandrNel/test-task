"use server";

import type { NewPost, Post } from "@/entities/post";
import { axios } from "@/shared/api/axios";
import { createAction } from "@/shared/lib/utils/createAction";

const createPostApi = async (post: NewPost) => {
  const res = await axios.post<Post>(`posts`, post);
  return res.data;
};

export const createPost = createAction<NewPost, Post>(
  createPostApi,
  { error: "Ошибка при создании поста", success: "Пост успешно создан" },
  "title",
  "body",
  "file",
);
