import { createFetch } from "@vueuse/core";

export const useApi = createFetch({
    baseUrl: import.meta.env.VITE_BASE_URL,
    options: {
        afterFetch(ctx) {
            return { ...ctx, data: JSON.parse(ctx.data) };
        },
    },
});
