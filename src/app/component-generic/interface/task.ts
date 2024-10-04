

export interface Task {
  id: number;
  title: string;
  completed: boolean;
  personas?: string[];  
  deadline: Date;
}