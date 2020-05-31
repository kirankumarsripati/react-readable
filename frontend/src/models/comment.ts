export interface IComment {
  parentId?: string;
  id: string;
  author: string;
  body: string;
  voteScore: number;
  timestamp: number;
}