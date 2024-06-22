import { ref } from "vue";
import { defineStore } from "pinia";
import { useApi } from "@/composables/useApi";

export const useTodoStore = defineStore("todo", () => {
    // * states
    const todoList = ref<ITodoItem[]>([] as ITodoItem[]);
    const todoItem = ref<ITodoItem>({} as ITodoItem);

    // * actions
    const fetchTodos = async () => {
        const { data } = await useApi("/todos");
        if (data.value) todoList.value = data.value as ITodoItem[];
    };

    const createTodo = async (payload: ITodoItem) => {
        const { data } = await useApi("/todos/").post(payload);
        if (data.value) todoList.value.push(data.value as ITodoItem);
    };

    const deleteTodo = async (id: number) => {
        const { data } = await useApi(`/todos/${id}`).delete();
        if (data.value) {
            const foundIndex = todoList.value.findIndex((x) => x.id === id);
            todoList.value.splice(foundIndex, 1);
        }
    };

    const updateTodo = async (id: number, payload: ITodoItem) => {
        const { data } = await useApi(`/todos/${id}`).put(payload);
    };

    return { todoList, todoItem, fetchTodos, createTodo, deleteTodo, updateTodo };
});
