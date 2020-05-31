export interface IComment {
  postId?: string;
  id: string;
  author?: string;
  body?: string;
  voteScore: number;
  timestamp: number;
}