<template>
    <div
        class="w-full p-2 flex dark:text-white items-center justify-between transition-all cursor-pointer rounded-md hover:bg-gray-200 dark:hover:bg-gray-500"
        @mouseenter="showActions = true"
        @mouseleave="showActions = false"
    >
        <div>
            <p>{{ item.id }}. {{ item.name }}</p>
            <p v-text="item.description" />
        </div>

        <div v-show="showActions" class="flex space-x-2">
            <Icon
                icon="tabler:pencil"
                @click="openEditDialog"
                class="text-lg transition-all rounded-full dark:hover:bg-gray-700 hover:bg-gray-300"
            />
            <Icon
                icon="mdi:delete-outline"
                @click="deleteItem"
                class="text-lg transition-all rounded-full dark:hover:bg-gray-700 hover:bg-gray-300"
            />
        </div>
    </div>
    <hr />

    <!-- * Edit Form -->
    <AppDialogVue :show="openDialog" @close="openDialog = false">
        <template #title>Edit Item</template>
        <template #content>
            <TodoForm submit-type="edit" @done="openDialog = false" />
        </template>
    </AppDialogVue>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useTodoStore } from "@/stores/todos";
import AppDialogVue from "../global/AppDialog.vue";
import TodoForm from "./TodoForm.vue";

interface IProp {
    item: ITodoItem;
}
const props = defineProps<IProp>();

const showActions = ref(false);
const openDialog = ref(false);

const todoStore = useTodoStore();
const deleteItem = async () => await todoStore.deleteTodo(props.item.id);

const openEditDialog = () => {
    openDialog.value = true;
    todoStore.todoItem = props.item;
};
</script>
