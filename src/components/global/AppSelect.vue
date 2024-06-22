<template>
    <Listbox as="div" class="relative" :modelValue="modelValue" @update:modelValue="handleModelValue" v-slot="{ open }">
        <ListboxButton
            as="button"
            class="bg-indigo-500 p-3 min-w-24 rounded-md text-white hover:bg-indigo-600 transition-all flex items-center justify-center space-x-1"
        >
            <p>{{ selectedItem ? selectedItem.text : "Select" }}</p>
            <Icon :icon="open ? 'tabler:chevron-up' : 'tabler:chevron-down'" class="text-xl" />
        </ListboxButton>

        <transition
            leave-active-class="transition duration-100 ease-in"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <ListboxOptions
                as="ul"
                class="absolute mt-1 w-full text-gray-100 overflow-auto rounded-md bg-indigo-500 py-3 px-3 top-full text-left"
            >
                <ListboxOption
                    v-for="item in items"
                    as="li"
                    class="hover:bg-indigo-400 rounded-md transition-all p-1 text-sm cursor-pointer"
                    :key="item.value"
                    :value="item"
                >
                    {{ item.text }}
                </ListboxOption>
            </ListboxOptions>
        </transition>
    </Listbox>
</template>

<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/vue";
import { ref } from "vue";

interface IProps {
    modelValue: any;
    items: ISelectItem[];
    itemValue: string;
}

const selectedItem = ref();

const props = defineProps<IProps>();
const emit = defineEmits(["update:modelValue"]);

const handleModelValue = (value: any) => {
    selectedItem.value = value;
    emit("update:modelValue", value[props.itemValue]);
};
</script>
