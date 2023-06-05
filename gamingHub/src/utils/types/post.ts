export type Post = {
  _id: string;
  userID: string;
  userName: string;
  content: string;
  imagePath: string;
  userPicturePath: string;
  category: string;
  likes: String[];
};
