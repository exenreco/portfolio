export interface Search {
  id: number;
  type: 'project' | 'blog' | 'skill' | 'page';
  title: string;
  content?: string;
  skills?: string[];
  tags?: string[];
  date?: Date;
  url: string;
}
