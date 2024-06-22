<template>
    <div>
        <AppButton @click="showDialog = true" variant="icon" class="fixed bottom-5 right-5">
            <Icon icon="tabler:plus" />
        </AppButton>

        <AppDialog :show="showDialog" @close="showDialog = false">
            <template #title>Add Todo</template>
            <template #content>
                <TodoForm submit-type="add" @done="showDialog = false" />
            </template>
        </AppDialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import AppButton from "../global/AppButton.vue";
import AppDialog from "../global/AppDialog.vue";
import TodoForm from "./TodoForm.vue";

const showDialog = ref(false);
</script>
