<template>
    <div class="space-y-4">
        <AppInput placeholder="Title" v-model="todoStore.todoItem.name" />
        <AppInput placeholder="Description" v-model="todoStore.todoItem.description" />
        <div class="space-x-4">
            <template v-for="(statusItem, statusIndex) in statusItems">
                <label class="inline dark:text-gray-300 accent-indigo-500 space-x-1 items-center">
                    <input
                        type="radio"
                        :name="statusItem.value"
                        :value="statusItem.value"
                        v-model="todoStore.todoItem.status"
                    />
                    <span>{{ statusItem.text }}</span>
                </label>
            </template>
        </div>
        <AppButton variant="primary" @click="submitHandler">Submit</AppButton>
    </div>
</template>

<script setup lang="ts">
import AppButton from "../global/AppButton.vue";
import AppInput from "../global/AppInput.vue";
import { useTodoStore } from "@/stores/todos";

const statusItems: ISelectItem[] = [
    {
        text: "Todo",
        value: "todo",
    },
    {
        text: "Doing",
        value: "doing",
    },
    {
        text: "Done",
        value: "done",
    },
];

const todoStore = useTodoStore();

interface IProps {
    submitType: "add" | "edit";
}

const props = defineProps<IProps>();

const emit = defineEmits(["done"]);

const submitHandler = async () => {
    props.submitType === "add"
        ? await todoStore.createTodo(todoStore.todoItem)
        : await todoStore.updateTodo(todoStore.todoItem.id, todoStore.todoItem);
    emit("done");
};
</script>
