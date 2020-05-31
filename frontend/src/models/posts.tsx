export interface IPost {
  id: string;
  timestamp: number;
  title: string;
  body: string;
  author: string;
  category: string;
  voteScore: number;
  deleted: boolean;
  commentCount: number;
  delta?: string;
}