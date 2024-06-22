<template>
    <button :class="handleVariantClasses">
        <slot />
    </button>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface IProps {
    variant: "primary" | "rounded" | "flat" | "icon";
}

const props = defineProps<IProps>();

const handleVariantClasses = computed(() => {
    switch (props.variant) {
        case "flat":
            return "transition-all p-3 rounded-md text-white";
        case "primary":
            return "bg-indigo-500 hover:bg-indigo-600 transition-all p-3 rounded-md text-white";
        case "rounded":
            return "bg-indigo-500 p-3 hover:bg-indigo-600 transition-all rounded-full";
        case "icon":
            return "w-10 h-10 text-xl text-white bg-indigo-500 hover:bg-indigo-600 transition-all rounded-full flex items-center justify-center";
    }
});
</script>
