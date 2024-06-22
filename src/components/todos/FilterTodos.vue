<template>
    <div class="flex items-center space-x-2 justify-center">
        <AppInput v-model="text" append-icon="tabler:search" placeholder="Search Todo" />

        <AppButton variant="primary" @click="toggleDark()">
            <Icon :icon="isDark ? 'tabler:moon' : 'tabler:sun'" class="text-2xl" />
        </AppButton>

        <AppSelect v-model:model-value="selectValue" :items="filterItems" />
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import AppInput from "../global/AppInput.vue";
import AppButton from "../global/AppButton.vue";
import AppSelect from "../global/AppSelect.vue";
import { useDark, useToggle } from "@vueuse/core";

const filterItems = [
    { text: "All", value: "all" },
    { text: "Done", value: "done" },
    { text: "Doing", value: "in-progress" },
];

const text = ref("");
const selectValue = ref();

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
