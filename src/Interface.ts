export interface CourseModel {
  id?: number;
  date: Date;
  title: string;
  description: string;
  authorId: string;
  rating?: number;
}
