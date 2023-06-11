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

export function getCommentsEndpoint(postId: string): string {
  return `/comment/${postId}/comments`;
}

export function addFriendEndpoint(
  userId: string | undefined,
  friendId: string | undefined
): string {
  return `/user/${userId}/${friendId}`;
}
export function getFriendsEndpoint(userId: string | undefined): string {
  return `/user/${userId}/friends`;
}
export function deleteFriendEndpoint(
  userId: string | undefined,
  friendId: string | undefined
): string {
  return `/user/delete/${userId}/${friendId}`;
}
