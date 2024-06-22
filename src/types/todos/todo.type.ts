interface ITodoItem {
    id: number;
    name: string;
    description: string;
    status: "todo" | "doing" | "done";
    createdAt: Date;
}
