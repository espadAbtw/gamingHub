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
export function deleteAccountEndpoint(id: string): string {
  return `/user/deleteUser/${id}`;
}

export function addPhotoProfileEndpoint(id: string): string {
  return `/user/addPhotoProfile/${id}`;
}
export function addPhotoProfileCluudEndpoint(): string {
  return `/upload`;
}
//https://gaminghub-backend.onrender.com/api/post/6441984b38033a2445ca17fa/likes
