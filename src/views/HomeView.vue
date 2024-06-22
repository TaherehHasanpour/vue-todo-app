<template>
    <main class="mx-auto text-center">
        <div class="space-y-5">
            <h1 class="text-3xl dark:text-white font-medium">Todo App (By MMD)</h1>

            <!-- * search & filter -->
            <div>
                <FilterTodos />
            </div>

            <!-- * List of Todos -->
            <div>
                <Suspense>
                    <template #default>
                        <TodoList />
                    </template>

                    <template #fallback>
                        <TodoLoading />
                    </template>
                </Suspense>
            </div>

            <!-- * Add Todo -->
            <AddTodo />
        </div>
    </main>
</template>

<script setup lang="ts">
import AddTodo from "@/components/todos/AddTodo.vue";
import FilterTodos from "@/components/todos/FilterTodos.vue";
import TodoList from "@/components/todos/TodoList.vue";
import TodoLoading from "@/components/todos/TodoLoading.vue";
</script>
