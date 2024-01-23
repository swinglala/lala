export type Progress = "TODO" | "DONE";

export interface TodoItem {
    progress: Progress;
    title: string;
    }

export const todoData: TodoItem[] = [
    { 
        progress: "TODO",
        title: "볼링",
    }]
    