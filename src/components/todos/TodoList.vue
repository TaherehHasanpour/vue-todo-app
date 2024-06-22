<template>
    <div class="space-y-3 mx-auto text-left">
        <template v-for="todoItem in todoStore.todoList">
            <TodoItem :item="todoItem" />
        </template>
    </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "@/stores/todos";
import TodoItem from "./TodoItem.vue";

const todoStore = useTodoStore();

await todoStore.fetchTodos();
</script>
