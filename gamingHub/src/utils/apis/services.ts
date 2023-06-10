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
