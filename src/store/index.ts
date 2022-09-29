import { configureStore } from "@reduxjs/toolkit";
import { githubApi } from "./github/github.api";
import { githubReducer } from "./github/github.slice";

export const store = configureStore({
    reducer: {
        [githubApi.reducerPath]: githubApi.reducer,
        github: githubReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(githubApi.middleware)
})

// для корректной настройки типизации-кастомные типы для понимания того скакими данными рабатаю в store
export type RootState = ReturnType<typeof store.getState>