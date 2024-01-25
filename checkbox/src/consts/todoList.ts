export type Progress = "TODO" | "DONE";

export interface TodoItem {
    id : number ;
    progress: Progress;
    title: string;
    completeDate?: string | null;
    }

export interface TodoItemRequest {
    title: string;
    completeDate?: string | null;
    }

export const todoData: TodoItem[] = [
    { 
        id : 1 , 
        progress: "TODO",
        title: "강원도 여행가기",
    },
    {
        id : 2 , 
        progress: "TODO",
        title: "건강검진 받으러가기", 
    },
    {
        id : 3 , 
        progress: "TODO",
        title: "게임하기", 
    },
    {
        id : 4 , 
        progress: "TODO",
        title: "계곡가기", 
    },
    {
        id : 5 , 
        progress: "TODO",
        title: "고궁 데이트", 
    },
    {
        id : 6 , 
        progress: "TODO",
        title: "교복 데이트", 
    },
]
    