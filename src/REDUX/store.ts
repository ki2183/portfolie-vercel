  import { configureStore } from '@reduxjs/toolkit'
  import themeSlice from './Slices/themeSlice'
  import modalSlice from './Slices/modalSlice'
  import viewNumSlice from './Slices/viewNumSlice'
  import WHSlice from './Slices/WHSlice'

  export const store = configureStore({
    reducer: {
      modal:modalSlice,
      theme:themeSlice,
      viewNum:viewNumSlice,
      wh:WHSlice,
    }
  })

  export type RootState = ReturnType<typeof store.getState>
  export type AppDispatch = typeof store.dispatch