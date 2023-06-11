export function getLoginEndpoint(): string {
  return "/user/signin";
}

export function getRegistrationEndpoint(): string {
  return "/user/signup";
}

export function getUserEndpoint(id: string): string {
  return `/user/${id}`;
}

export function getPostsEndpoint(): string {
  return "/post/posts";
}
export function addLikeEndpoint(postId: string): string {
  return `/post/${postId}/likes`;
}
//https://gaminghub-backend.onrender.com/api/post/6441984b38033a2445ca17fa/likes
