<template>
    <div class="border rounded border-indigo-500 h-12 px-2 flex items-center">
        <input v-model="inputValue" v-bind="$attrs" class="outline-none bg-transparent dark:text-white w-full h-full" />
        <Icon v-if="appendIcon" :icon="appendIcon" class="text-3xl text-indigo-500" />
    </div>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";

interface IProps {
    appendIcon?: string;
}

defineProps<IProps>();

const inputValue = defineModel();

defineOptions({ inheritAttrs: false });
</script>
